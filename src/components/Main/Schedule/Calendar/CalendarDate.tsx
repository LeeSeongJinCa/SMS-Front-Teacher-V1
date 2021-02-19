import React, {
  ReactElement,
  useMemo,
  MouseEvent,
  useCallback,
  memo
} from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { stateType } from "../../../../modules/reducer";
import { UserType } from "../../../../modules/action/header";
import { getWeekOfMonth, padNum } from "../../../../lib/utils";
import { ResSchedule } from "../../../../lib/api/payloads/Main";

interface Props {}

interface ScheduleBuffer {
  1: ResSchedule[];
  2: ResSchedule[];
  3: ResSchedule[];
  4: ResSchedule[];
  5: ResSchedule[];
  6: ResSchedule[];
}

enum BackgroundColor {
  "#1e9ce2" = 0,
  "#f2532b" = 1,
  "#3ab57a" = 2
}

const date = new Date();
const fixedDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  9
);

const CalendarDate: React.FC<Props> = () => {
  const {
    main: { schedulerDate, schedules },
    header: { type }
  } = useSelector((state: stateType) => state);

  const onClickDate = (e: MouseEvent<HTMLDivElement>) => {
    const classList = e.currentTarget.classList;
    if (classList.contains("selected")) {
      classList.remove("selected");
      return;
    }
    Array.from(e.currentTarget.parentNode.children).forEach(el => {
      el.classList.remove("selected");
    });
    classList.add("selected");
  };

  const getDateJSX = (
    children: number = 0,
    id: string = "",
    styling: string = ""
  ): ReactElement => (
    <S.CalendarDate
      key={`${id}-${children}`}
      className={styling}
      onClick={styling.match("curr") ? onClickDate : () => {}}
      type={type as UserType}
    >
      <S.CalendarDaySpan>{children && padNum(children)}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const printCalendar = useCallback(
    (yearCopy: number, monthCopy: number): ReactElement[] => {
      const fixedMonth = padNum(monthCopy),
        lastDay = new Date(yearCopy, monthCopy, 0).getDate(),
        prevLastDate = new Date(yearCopy, monthCopy - 1, 0).getDate(),
        firstDay = new Date(yearCopy, monthCopy - 1, 1).getDay(),
        jsx: ReactElement[] = [];
      let startDayCount: number = 1;
      let nextDayCount: number = 1;

      for (let i = 0; i < 6; i += 1) {
        for (let j = 0; j < 7; j += 1) {
          if (i === 0 && j < firstDay) {
            jsx.push(
              getDateJSX(prevLastDate - firstDay + j + 1, `${j}`, "prev")
            );
          } else if (i >= 0 && startDayCount <= lastDay) {
            const date = `${yearCopy}-${fixedMonth}-${padNum(startDayCount)}`,
              t = new Date(),
              y = t.getFullYear(),
              m = t.getMonth() + 1,
              d = t.getDate();
            date === `${y}-${padNum(m)}-${padNum(d)}`
              ? jsx.push(getDateJSX(startDayCount, date, "curr today"))
              : jsx.push(getDateJSX(startDayCount, date, "curr"));
            startDayCount += 1;
          } else {
            const date: string =
              +fixedMonth + 1 > 12
                ? `${+yearCopy + 1}-${1}-${padNum(nextDayCount)}`
                : `${yearCopy}-${+fixedMonth + 1}-${padNum(nextDayCount)}`;
            jsx.push(getDateJSX(nextDayCount, date));
            nextDayCount += 1;
          }
        }
      }
      return jsx;
    },
    [schedulerDate, type]
  );

  const memoizedCalendar = useMemo<ReactElement[]>(
    () =>
      printCalendar(schedulerDate.getFullYear(), schedulerDate.getMonth() + 1),
    [schedulerDate, type]
  );

  const getScheduleInit = (
    startDate: number,
    endDate: number
  ): { sWeek: number; eWeek: number; sDay: number; eDay: number } => {
    const start: Date = new Date(startDate),
      end: Date = new Date(endDate),
      sWeek: number = getWeekOfMonth(start),
      eWeek: number = getWeekOfMonth(end),
      sDay: number = start.getDay(),
      eDay: number = end.getDay();

    return { sWeek, eWeek, sDay, eDay };
  };

  const getOverlapCondition = (
    i: number,
    prev: number,
    prevOverlapCount: number,
    overlapCount: number,
    sameCount: number
  ) => {
    let overlap: number;
    if (overlapCount === 0) overlap = overlapCount;
    else if (sameCount > 0) overlap = i;
    else if (prevOverlapCount === overlapCount) {
      if (sameCount > 0) overlap = i;
      else if (prevOverlapCount === overlapCount)
        overlap = prevOverlapCount - overlapCount;
      else {
        overlap =
          prev - overlapCount <= 0 ? prev + overlapCount : prev - overlapCount;
      }
    } else {
      if (overlapCount < i) overlap = overlapCount;
      else if (overlapCount > i) overlap = i;
      else if (overlapCount > prevOverlapCount)
        overlap = prevOverlapCount + overlapCount;
      else overlap = overlapCount;
    }

    return overlap;
  };

  const initializeBuffer = useCallback(
    (schedules: ResSchedule[], buffer: ScheduleBuffer) => {
      schedules.forEach(schedule => {
        const { start_date, end_date } = schedule;
        const { sWeek, eWeek } = getScheduleInit(start_date, end_date);

        for (let i = sWeek; i <= eWeek; i++) {
          (buffer[i] as ResSchedule[]).push(schedule);
        }
      });
    },
    []
  );

  const printScheduler = useCallback(
    (
      schedules: ResSchedule[],
      buffer: ScheduleBuffer,
      result: ReactElement[]
    ) => {
      for (const week in buffer) {
        let overlapCount = 0;
        let prevOverlapCount = 0;
        let sameCount = 0;
        let prev = 0;
        (buffer[week] as ResSchedule[]).forEach(
          (
            { schedule_uuid, start_date: sDate, end_date: eDate, detail },
            i
          ) => {
            const { sDay, eDay } = getScheduleInit(sDate, eDate);
            let overlap = 0;

            schedules.forEach(
              ({ schedule_uuid: uuid, start_date: sD, end_date: eD }, i) => {
                if (uuid !== schedule_uuid) {
                  if (eD - sDate >= 0 && eD - eDate < 0) overlapCount++;
                  if (eD === eDate && sD === sDate) sameCount++;
                }
              }
            );

            overlap = getOverlapCondition(
              i,
              prev,
              prevOverlapCount,
              overlapCount,
              sameCount
            );

            if (overlap < 3) {
              result.push(
                <S.CalendarBar
                  key={`${schedule_uuid}-${i}`}
                  backgroundColor={BackgroundColor[overlap]}
                  className={+fixedDate > eDate ? "prev" : ""}
                  eDay={eDay}
                  overlap={overlap}
                  sDay={sDay}
                  weekOfMonth={+week}
                >
                  <S.CalendarBarDetail>{detail}</S.CalendarBarDetail>
                </S.CalendarBar>
              );
            }

            prevOverlapCount = overlapCount;
            prev = overlap;
            overlapCount = 0;
            sameCount = 0;
            overlap = 0;
          }
        );
      }
    },
    []
  );

  const scheduler = useMemo(() => {
    const buffer: ScheduleBuffer = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: []
    };
    const result: ReactElement[] = [];

    initializeBuffer(schedules, buffer);
    printScheduler(schedules, buffer, result);

    return result;
  }, [schedules]);

  return (
    <>
      {memoizedCalendar}
      {scheduler}
    </>
  );
};

export default memo(CalendarDate);
