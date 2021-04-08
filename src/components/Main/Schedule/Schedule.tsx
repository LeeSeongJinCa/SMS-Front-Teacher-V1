import React, { FC, ReactElement, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Calendar from "./Calendar/Calendar";

import * as S from "../style";
import {
  getSchedulesSaga,
  setSchedulerDate,
  setSchedules
} from "../../../modules/action/main";
import { stateType } from "../../../modules/reducer";
import { padNum } from "../../../lib/utils";

interface Props {}

const Schedule: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const { schedulerDate } = useSelector((state: stateType) => state.main);

  const onClickNextMonth = () => {
    dispatch(setSchedules([]));
    const next = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() + 1
    );
    dispatch(setSchedulerDate(next));
  };

  const onClickPrevMonth = () => {
    dispatch(setSchedules([]));
    const prev = new Date(
      schedulerDate.getFullYear(),
      schedulerDate.getMonth() - 1
    );
    dispatch(setSchedulerDate(prev));
  };

  const getLocalDate = useCallback((date: Date) => {
    return `${date.getFullYear()}.${padNum(date.getMonth() + 1)}`;
  }, []);

  useEffect(() => {
    const year = schedulerDate.getFullYear();
    const month = schedulerDate.getMonth() + 1;

    dispatch(getSchedulesSaga(year, month));
  }, [schedulerDate]);

  return (
    <S.Schedule>
      <S.ScheduleHeader>
        <S.MainContentTitleCommon>학사일정</S.MainContentTitleCommon>
        <S.ScheduleHeaderDateSetting>
          <S.TimetableChangerLeft onClick={onClickPrevMonth} />
          <span>{getLocalDate(schedulerDate)}</span>
          <S.TimetableChangerRight onClick={onClickNextMonth} />
        </S.ScheduleHeaderDateSetting>
      </S.ScheduleHeader>
      <Calendar />
    </S.Schedule>
  );
};

export default Schedule;
