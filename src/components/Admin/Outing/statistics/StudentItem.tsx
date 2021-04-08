import React, { FC, memo, useCallback, useMemo, useState } from "react";

import * as S from "./style";
import { Period } from "./index";

import { MainArrow } from "../../../../assets";
import { EndStudents } from "../../../../lib/hooks/useEndStudents";
import { padNum } from "../../../../lib/utils";

enum Days {
  "일",
  "월",
  "화",
  "수",
  "목",
  "금",
  "토"
}

interface Props {
  student: string;
  subList: EndStudents[];
}

interface SubProps {
  place: string;
  reason: string;
  date: string;
  situation: string;
  late: string;
}

const SubItem: FC<SubProps> = ({ place, reason, date, situation, late }) => {
  return (
    <li>
      <span className="place">{place}</span>
      <span className="reason">{reason}</span>
      <span className="date">{date}</span>
      <span className="situation">{situation}</span>
      <span className="late">{late}</span>
    </li>
  );
};

const StudentItem: FC<Props> = ({ student, subList }) => {
  const [isShown, setShown] = useState<boolean>(false);
  const name = student.split(" ")[0];
  const number = student.split(" ")[1];

  const onClickShow = useCallback(() => {
    setShown(prev => !prev);
  }, []);

  const displaySubList = useMemo(() => {
    return subList.map((item, i) => {
      const date = new Date(item.date);
      const y = date.getFullYear();
      const m = padNum(date.getMonth() + 1);
      const d = padNum(date.getDate());
      const day = Days[date.getDay()];

      return (
        <SubItem
          key={`${student}_${i}`}
          place={item.place}
          reason={item.reason}
          date={`${y}년 ${m}월 ${d}일 (${day})`}
          situation={item.situation}
          late={item.late ? "O" : "X"}
        />
      );
    });
  }, [subList]);

  const outingCount = useMemo(() => {
    return subList.reduce((prev, curr) => (curr.late ? prev + 1 : prev), 0);
  }, [subList]);

  return (
    <S.StudentItemWrap onClick={onClickShow}>
      <span>{name}</span>
      <span>{number}</span>
      <span>{subList.length}</span>
      <span>{outingCount}</span>

      <img
        src={MainArrow}
        className={isShown ? "spread" : ""}
        alt="more"
        title="more"
      />

      <div>
        <S.StudentSubList isShown={isShown}>
          <SubItem
            place="장소"
            reason="사유"
            date="날짜"
            situation="상태"
            late="지각 여부"
          />
          {displaySubList}
        </S.StudentSubList>
      </div>
    </S.StudentItemWrap>
  );
};

export default memo(StudentItem);
