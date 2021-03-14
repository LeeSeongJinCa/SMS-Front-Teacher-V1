import React, {
  ReactElement,
  useMemo,
  useCallback,
  memo,
  useEffect
} from "react";
import { useDispatch } from "react-redux";

import * as S from "./style";
import Scheduler from "./Scheduler";

import { padNum } from "../../../../lib/utils";
import { setSelectedDate } from "../../../../modules/action/main";
import useCustomSelector from "../../../../lib/hooks/useCustomSelector";

interface Props {}

const CalendarDate: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { schedulerDate } = useCustomSelector().main;

  const handleClickDate = (target: HTMLDivElement) => {
    const id = target.dataset.id;
    const classList = target.classList;
    const children = target.parentNode.children;

    if (classList.contains("selected")) {
      dispatch(setSelectedDate(""));
      classList.remove("selected");
      return;
    }

    Array.from(children).map(el => {
      el.classList.remove("selected");
    });

    dispatch(setSelectedDate(id));
    classList.add("selected");
  };

  const getDateJSX = (
    children: number,
    id: string = "",
    styling: string = ""
  ): ReactElement => {
    if (!styling) {
      return (
        <S.CalendarDate key={id} className={styling}>
          <S.CalendarDaySpan>{padNum(children)}</S.CalendarDaySpan>
        </S.CalendarDate>
      );
    }

    return (
      <S.CalendarDate
        key={id}
        data-id={id}
        className={styling}
        onClick={e => handleClickDate(e.currentTarget)}
      >
        <S.CalendarDaySpan>{padNum(children)}</S.CalendarDaySpan>
      </S.CalendarDate>
    );
  };

  const printCalendar = useCallback((): ReactElement[] => {
    const yearCopy = schedulerDate.getFullYear();
    const monthCopy = schedulerDate.getMonth() + 1;
    const fixedMonth = padNum(monthCopy);
    const lastDay = new Date(yearCopy, monthCopy, 0).getDate();
    const firstDay = new Date(yearCopy, monthCopy - 1, 1).getDay();
    const jsx: ReactElement[] = [];
    let startDayCount = 1;
    let nextDayCount = 1;

    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          const prevLastDate = new Date(yearCopy, monthCopy - 1, 0).getDate();

          jsx.push(getDateJSX(prevLastDate - firstDay + j + 1, `${j}`));
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
  }, [schedulerDate]);

  const memoizedCalendar = useMemo<ReactElement[]>(() => {
    return printCalendar();
  }, [schedulerDate]);

  useEffect(() => {
    return () => {
      dispatch(setSelectedDate(""));
    };
  }, []);

  return (
    <>
      {memoizedCalendar}
      <Scheduler />
    </>
  );
};

export default memo(CalendarDate);
