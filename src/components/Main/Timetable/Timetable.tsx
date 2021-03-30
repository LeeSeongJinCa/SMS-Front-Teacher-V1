import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import TimeTableList from "./TimeTableList";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { getTimetablesSaga } from "../../../modules/action/main";
import { STUDENT } from "../../../modules/action/header";

interface Props {}

const date = new Date();

const TimeTable: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    main: { timetable, timetableLoading },
    header: { type }
  } = useSelector((state: stateType) => state);
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

  useEffect(() => {
    if (type === STUDENT) {
      dispatch(
        getTimetablesSaga(date.getFullYear(), date.getMonth() + 1, tDate)
      );
    }
  }, [tDate, type]);

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
