import React, { FC, ReactElement, useState } from "react";
import { toast } from "react-toastify";

import TimeTableList from "./TimeTableList";

import * as S from "../style";
import useCustomSelector from "../../../lib/hooks/useCustomSelector";

interface Props {}

const date = new Date();

const TimeTable: FC<Props> = (): ReactElement => {
  const { timetable, timetableLoading } = useCustomSelector().main;

  const [tDate, setTDate] = useState<number>(date.getDate());

  const handleNextTimetable = () => {
    const currLastDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    if (tDate === currLastDate) {
      toast.info("이번 달 안에서만 시간표 조회가 가능합니다.");
      return;
    }
    setTDate(prev => prev + 1);
  };

  const handlePrevTimetable = () => {
    if (tDate === 1) {
      toast.info("이번 달 안에서만 시간표 조회가 가능합니다.");
      return;
    }
    setTDate(prev => prev - 1);
  };

  return (
    <S.Timetable>
      <S.TimetableTitle>
        <S.FiltersWrap>
          <S.TimetableSelector onClick={handlePrevTimetable}>
            <S.TimetableChangerLeft />
          </S.TimetableSelector>
          <span>
            {date.getMonth() + 1}/{tDate}
          </span>
          <S.TimetableSelector onClick={handleNextTimetable}>
            <S.TimetableChangerRight />
          </S.TimetableSelector>
        </S.FiltersWrap>
      </S.TimetableTitle>
      <TimeTableList loading={timetableLoading} timetable={timetable} />
    </S.Timetable>
  );
};

export default TimeTable;
