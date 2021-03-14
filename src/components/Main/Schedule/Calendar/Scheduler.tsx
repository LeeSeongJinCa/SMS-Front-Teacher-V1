import React, { FC, useMemo } from "react";

import * as S from "./style";

import useCustomSelector from "../../../../lib/hooks/useCustomSelector";
import { getWeekOfMonth } from "../../../../lib/utils";

interface Props {}

enum BackgroundColor {
  "#1e9ce2" = 0,
  "#f2532b" = 1,
  "#3ab57a" = 2
}

const Scheduler: FC<Props> = () => {
  const { schedules, schedulerDate } = useCustomSelector().main;

  const getScheduleJSX = (
    uuids: string[],
    weekOfMonth: number,
    day: number,
    date: number
  ) => {
    return uuids.map((u, i) => {
      if (!u) return null;
      if (i > 2) return null;

      const target = schedules.find(_ => _.schedule_uuid === u);
      const { detail: d, start_date: s, end_date: e } = target;
      const today = new Date();
      const sDate = new Date(s);
      const eDate = new Date(e);
      const isPrev =
        new Date(eDate.getFullYear(), eDate.getMonth(), eDate.getDate()) <
        new Date(today.getFullYear(), today.getMonth(), today.getDate());
      let isStart = false;
      let isEnd = false;

      if (
        sDate.getMonth() === schedulerDate.getMonth() &&
        sDate.getDate() === date
      ) {
        isStart = true;
      }

      if (
        eDate.getMonth() === schedulerDate.getMonth() &&
        eDate.getDate() === date
      ) {
        isEnd = true;
      }

      return (
        <S.CalendarBar
          key={`${i}-${u}`}
          weekOfMonth={weekOfMonth}
          overlap={i}
          day={day}
          className={isPrev ? "prev" : ""}
          backgroundColor={BackgroundColor[i]}
          isStart={isStart}
          isEnd={isEnd}
        >
          {isStart && <S.CalendarBarDetail>{d}</S.CalendarBarDetail>}
        </S.CalendarBar>
      );
    });
  };

  const scheduling = useMemo(() => {
    const date = new Date(schedulerDate);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const lastDate = new Date(y, m, 0).getDate();
    const list = [];
    const printed: JSX.Element[][] = [];
    const arr = schedules.map(
      ({ start_date: s, end_date: e, schedule_uuid: u }) => {
        const sDate = new Date(s);
        const eDate = new Date(e);
        const start =
          sDate.getMonth() < schedulerDate.getMonth() ? 1 : sDate.getDate();
        const end =
          eDate.getMonth() > schedulerDate.getMonth()
            ? lastDate
            : eDate.getDate();

        return [start, end, u];
      }
    );

    for (let i = 1; i <= lastDate; i++) {
      for (const [s, e, u] of arr) {
        if (s === i) {
          const idx = list.findIndex(_ => _ === null);

          if (idx === -1) list.push(u);
          else list[idx] = u;
        }

        if (+e + 1 === i) {
          const idx = list.findIndex(_ => _ === u);

          list[idx] = null;
        }
      }

      const date = new Date(y, m - 1, i);
      const day = date.getDay();
      const weekOfMonth = getWeekOfMonth(date);

      printed.push(getScheduleJSX(list, weekOfMonth, day, i));
    }

    return printed;
  }, [schedules, schedulerDate]);

  return <>{scheduling}</>;
};

export default Scheduler;
