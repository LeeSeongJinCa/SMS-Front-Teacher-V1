import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import usePeriod from "./usePeriod";
import useDidMountEffect from "./useDidMountEffect";

import { getEndOutingFiltered, getEndOutings } from "../api/Outing";
import { ResOutingCardListItem } from "../api/payloads/OutingCard";
import { getAxiosError, padNum } from "../utils";
import useLoading from "./common/useLoading";

export interface EndStudents {
  place: string;
  reason: string;
  date: Date;
  situation: "일반 외출" | "질병 외출";
  arrive: Date;
  late: boolean;
}

const useEndStudents = () => {
  const history = useHistory();
  const [period, handlePeriod] = usePeriod();
  const [loading, startLoading, endLoading] = useLoading();
  const [endOutings, setEndOutings] = useState<ResOutingCardListItem[]>([]);
  const [endStudents, setEndStudents] = useState<Map<string, EndStudents[]>>(
    new Map()
  );

  const fetchOutings = async () => {
    try {
      const res = await getEndOutings();

      setEndOutings(res.data.outings);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 403) {
        toast.error("선생님 계정으로 로그인해주세요.");
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    startLoading();
    fetchOutings().finally(() => {
      endLoading();
    });
  }, []);
  useEffect(() => {
    if (!endOutings) return;

    const map = new Map();

    endOutings.forEach(outing => {
      const {
        grade,
        group,
        number,
        name,
        place,
        reason,
        start_time,
        is_late,
        arrival_time,
        outing_situation
      } = outing;
      const isNormal = outing_situation.toLocaleLowerCase() === "normal";
      const student = `${grade}${group}${padNum(number)} ${name}`;
      const sInfo: EndStudents = {
        place,
        reason,
        date: new Date(start_time * 1000),
        situation: isNormal ? "일반 외출" : "질병 외출",
        arrive: new Date(arrival_time * 1000),
        late: is_late
      };

      map.set(student, [...(map.get(student) || []), sInfo]);
    });

    setEndStudents(map);
  }, [endOutings]);
  useDidMountEffect(() => {
    startLoading();
    if (period === 0) {
      fetchOutings();
    } else {
      const fetchFilteredOutings = async () => {
        const res = await getEndOutingFiltered(period);

        setEndOutings(res.data.outings);
      };

      fetchFilteredOutings();
    }
    endLoading();
  }, [period]);

  return [endStudents, loading, period, handlePeriod] as const;
};

export default useEndStudents;
