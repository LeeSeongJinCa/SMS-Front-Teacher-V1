import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { getEndOutings } from "../api/Outing";
import { ResOutingCardListItem } from "../api/payloads/OutingCard";
import { getAxiosError, padNum } from "../utils";

export interface EndStudents {
  place: string;
  reason: string;
  date: Date;
  situation: "일반 외출" | "질병 외출";
  late: boolean;
}

const useEndStudents = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [endOutings, setEndOutings] = useState<ResOutingCardListItem[]>([]);
  const [endStudents, setEndStudents] = useState<Map<string, EndStudents[]>>(
    new Map()
  );

  useEffect(() => {
    setLoading(true);
    getEndOutings()
      .then(res => {
        setEndOutings(res.data.outings);
      })
      .catch(err => {
        console.log(err);
        const { status } = getAxiosError(err);

        if (status === 403) {
          toast.error("선생님 계정으로 로그인해주세요.");
          history.push("/login");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    if (!endOutings) return;

    const map = new Map();

    endOutings.forEach(outing => {
      const { grade, group, number, name } = outing;
      const isNormal = outing.outing_situation.toLocaleLowerCase() === "normal";
      const student = `${grade}${group}${padNum(number)} ${name}`;
      const sInfo: EndStudents = {
        place: outing.place,
        reason: outing.reason,
        date: new Date(outing.start_time * 1000),
        situation: isNormal ? "일반 외출" : "질병 외출",
        late: outing.is_late
      };

      map.set(student, [...(map.get(student) || []), sInfo]);
    });

    setEndStudents(map);
  }, [endOutings]);

  return [endStudents, loading] as const;
};

export default useEndStudents;
