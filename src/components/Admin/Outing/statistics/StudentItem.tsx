import React, { FC, memo, useCallback, useMemo, useState } from "react";

import * as S from "./style";

import { MainArrow } from "../../../../assets";

interface Props {
  i: number;
}

const subItem = {
  arrival_time: 0,
  end_time: 1616671800,
  grade: 3,
  group: 2,
  is_late: false,
  name: "윤석준",
  number: 11,
  outing_situation: "NORMAL",
  outing_status: "1",
  outing_uuid: "outing-929009311296",
  place: "충청북도 청주시 흥덕구 신성동 109 신성동 109호",
  reason: "내가 나가고 싶다는데 왜 못 나가게 하는데 이성진  어?????",
  start_time: 1616656800
};

const subList = [subItem, subItem, subItem, subItem, subItem, subItem, subItem];

const StudentItem: FC<Props> = ({ i }) => {
  const [isShown, setShown] = useState<boolean>(false);

  const onClickShow = useCallback(() => {
    setShown(prev => !prev);
  }, []);

  const displaySubList = useMemo(() => {
    return subList.map((item, j) => {
      const {
        place,
        reason,
        start_time,
        is_late,
        outing_situation,
        outing_uuid
      } = item;
      return (
        <li key={outing_uuid + j}>
          <span className="place">{place}</span>
          <span className="reason">{reason}</span>
          <span className="date">2021년 03월 30일 (화)</span>
          <span className="situation">
            {outing_situation.toLocaleLowerCase() === "normal"
              ? "일반 외출"
              : "질병 외출"}
          </span>
          <span className="late">{is_late ? "O" : "X"}</span>
        </li>
      );
    });
  }, [subList]);

  return (
    <S.StudentItemWrap>
      <span>321{i + 1}</span>
      <span>{i + 1}성진</span>
      <span>{i + 1}</span>

      <img
        src={MainArrow}
        className={isShown ? "spread" : ""}
        alt="more"
        title="more"
        onClick={onClickShow}
      />

      <div>
        <S.StudentSubList isShown={isShown}>
          <li>
            <span className="place">장소</span>
            <span className="reason">사유</span>
            <span className="date">날짜</span>
            <span className="situation">상태</span>
            <span className="late">지각 여부</span>
          </li>
          {displaySubList}
        </S.StudentSubList>
      </div>
    </S.StudentItemWrap>
  );
};

export default memo(StudentItem);
