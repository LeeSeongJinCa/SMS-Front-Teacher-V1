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

interface Props {}

enum BackgroundColor {
  "#1e9ce2" = 0,
  "#f2532b" = 1,
  "#3ab57a" = 2
}

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
      key={id}
      className={styling}
      onClick={styling.match("curr") ? onClickDate : () => {}}
      type={type as UserType}
    >
      <S.CalendarDaySpan>{children && padNum(children)}</S.CalendarDaySpan>
    </S.CalendarDate>
  );

  const printCalendar = useCallback((): ReactElement[] => {
    const yearCopy = schedulerDate.getFullYear();
    const monthCopy = schedulerDate.getMonth() + 1;
    const fixedMonth = padNum(monthCopy);
    const lastDay = new Date(yearCopy, monthCopy, 0).getDate();
    const prevLastDate = new Date(yearCopy, monthCopy - 1, 0).getDate();
    const firstDay = new Date(yearCopy, monthCopy - 1, 1).getDay();
    const jsx: ReactElement[] = [];
    let startDayCount = 1;
    let nextDayCount = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          jsx.push(getDateJSX(prevLastDate - firstDay + j + 1, `${j}`, "prev"));
        } else if (i >= 0 && startDayCount <= lastDay) {
          const date = `${yearCopy}-${fixedMonth}-${padNum(startDayCount)}`;
          const t = new Date();
          const y = t.getFullYear();
          const m = t.getMonth() + 1;
          const d = t.getDate();
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
  }, [schedulerDate, type]);

  const memoizedCalendar = useMemo<ReactElement[]>(() => {
    return printCalendar();
  }, [schedulerDate, type]);

  const scheduling = () => {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const lastDate = new Date(y, m, 0).getDate();
    const list = [];
    const printed = [];
    const arr = schedules.map(
      ({ start_date: s, end_date: e, schedule_uuid: u }) => [
        new Date(s).getDate(),
        new Date(e).getDate(),
        u
      ]
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
  };

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
      const today = new Date().getDate();
      const isPrev = new Date(e).getDate() <= today;
      let isStart = false;
      let isEnd = false;

      if (new Date(s).getDate() === date) {
        isStart = true;
      }

      if (new Date(e).getDate() === date) {
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
          <S.CalendarBarDetail>{isStart ? d : " "}</S.CalendarBarDetail>
        </S.CalendarBar>
      );
    });
  };

  return (
    <>
      {memoizedCalendar}
      {console.log("ㅡㅡㅡㅡㅡ")}
      {scheduling()}
    </>
  );
};

export default memo(CalendarDate);
