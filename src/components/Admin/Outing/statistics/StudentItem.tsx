import React, { FC, memo, useMemo } from "react";

import * as S from "./style";

import { MainArrow } from "../../../../assets";
import { EndStudents } from "../../../../lib/hooks/useEndStudents";
import { padNum } from "../../../../lib/utils";
import useToggle from "../../../../lib/hooks/common/useToggle";

const getLocalDate = (date: Date) => {
  const y = date.getFullYear();
  const m = padNum(date.getMonth() + 1);
  const d = padNum(date.getDate());
  const day = Days[date.getDay()];

  return `${y}년 ${m}월 ${d}일 (${day})`;
};

const getLocalTime = (date: Date) => {
  let h = padNum(date.getHours());
  const m = padNum(date.getMinutes());

  if (h > "12") {
    h = padNum(+h - 12);
    return `오후 ${h}:${m}`;
  }

  return `오전 ${h}:${m}`;
};

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
  arrive: string;
  late: string;
}

const SubItem: FC<SubProps> = ({
  place,
  reason,
  date,
  situation,
  arrive,
  late
}) => {
  return (
    <li>
      <span className="place">{place}</span>
      <span className="reason">{reason}</span>
      <span className="date">{date}</span>
      <span className="arrive">{arrive}</span>
      <span className="situation">{situation}</span>
      <span className="late">{late}</span>
    </li>
  );
};

const StudentItem: FC<Props> = ({ student, subList }) => {
  const [isShown, toggleShow] = useToggle();
  const name = student.split(" ")[0];
  const number = student.split(" ")[1];

  const displaySubList = useMemo(() => {
    return subList.map((item, i) => {
      const date = getLocalDate(item.date);
      const arriveDate = getLocalTime(item.arrive);

      return (
        <SubItem
          key={`${student}_${i}`}
          place={item.place}
          reason={item.reason}
          date={date}
          situation={item.situation}
          arrive={arriveDate}
          late={item.late ? "O" : "X"}
        />
      );
    });
  }, [subList]);

  const outingCount = useMemo(() => {
    return subList.reduce((prev, curr) => (curr.late ? prev + 1 : prev), 0);
  }, [subList]);

  return (
    <S.StudentItemWrap onClick={toggleShow}>
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
            arrive="도착 시간"
            late="지각 여부"
          />
          {displaySubList}
        </S.StudentSubList>
      </div>
    </S.StudentItemWrap>
  );
};

export default memo(StudentItem);
