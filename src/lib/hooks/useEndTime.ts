import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { getOutingCardListSaga } from "../../modules/action/outingCard";
import { patchEndTime } from "../api/Outing";
import { OutingStatus } from "../api/payloads/Outing";
import { getAxiosError, padNum } from "../utils";

const useEndTime = (
  outingUuid: string,
  start_time: number,
  end_time: number,
  endTime: string
) => {
  const history = useHistory();
  const [endHour, setEndHour] = useState<string>("00");
  const [endMin, setEndMin] = useState<string>("00");

  const handleEndHour = (e: ChangeEvent<HTMLSelectElement>) => {
    setEndHour(e.currentTarget.value);
  };

  const handleEndMin = (e: ChangeEvent<HTMLSelectElement>) => {
    setEndMin(e.currentTarget.value);
  };

  const dispatch = useDispatch();

  const onClickChangeOutTime = async () => {
    const end = new Date(end_time * 1000);
    const newEnd = `${padNum(end.getHours())}:${padNum(end.getMinutes())}`;
    const oldEnd = `${endHour}:${endMin}`;

    if (newEnd === oldEnd) {
      toast.error("종료 시간을 바꿔주세요.");
      return;
    }

    end.setHours(+endHour, +endMin);

    if (+end < +new Date()) {
      toast.error("현재 시간보다 종료 시간이 늦을 수 없습니다.");
      return;
    }
    if (+end < +new Date(start_time * 1000)) {
      toast.error("종료 시간이 시작 시간보다 늦을 수 없습니다.");
      return;
    }
    if (
      (end.getHours() === 20 && end.getMinutes() > 30) ||
      end.getHours() > 20
    ) {
      toast.error("종료 시간은 최대 20시 30분까지 설정할 수 있습니다.");
      return;
    }

    try {
      await patchEndTime(outingUuid, end.getTime() / 1000);
      dispatch(getOutingCardListSaga({ status: OutingStatus["학부모 승인"] }));
      toast.success("종료 시간을 변경했습니다.");
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 403) {
        toast.error("선생님 계정으로 이용해주세요.");
        history.push("/login");
      } else if (status === 404) {
        toast.error("존재하지 않는 외출증입니다.");
      } else if (status === 409) {
        toast.error("종료 시간을 수정할 수 없는 외출증입니다.");
      }
    }
  };

  useEffect(() => {
    setEndHour(endTime.split(":")[0]);
    setEndMin(endTime.split(":")[1]);
  }, [endTime]);

  return [
    endHour,
    endMin,
    handleEndHour,
    handleEndMin,
    onClickChangeOutTime
  ] as const;
};

export default useEndTime;
