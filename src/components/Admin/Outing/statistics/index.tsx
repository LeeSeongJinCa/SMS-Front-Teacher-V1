import React, { FC } from "react";

import * as S from "./style";
import GradeSelector from "./GradeSelector";
import GroupSelector from "./GroupSelector";

import { SearchIcon, MainArrow } from "../../../../assets";
import useStatisticsSelector from "../../../../lib/hooks/useStatisticsSelector";
import StudentItem from "./StudentItem";

interface Props {}

const Statistics: FC<Props> = () => {
  const [
    gradeSelect,
    groupSelect,
    gradeHandler,
    groupHandler
  ] = useStatisticsSelector();

  return (
    <S.StatisticsWrap>
      <aside>
        <S.SelectorWrap className="selector-wrap">
          <GradeSelector gradeHandler={gradeHandler} />
          <GroupSelector groupHandler={groupHandler} />
        </S.SelectorWrap>
        <div>
          <S.SearchWrap className="search-wrap">
            <div>
              <img
                src={SearchIcon}
                alt="search student"
                title="search student"
              />
              <input placeholder="학생 이름을 입력하세요." />
            </div>
          </S.SearchWrap>
          <S.PeriodWrap className="period-wrap">
            <S.Triangle />
            <span>기간</span>
          </S.PeriodWrap>
        </div>
      </aside>
      <section>
        <ul>
          <li>
            <span>학번</span>
            <span>이름</span>
            <span>외출횟수</span>
          </li>
          {Array(40)
            .fill(0)
            .map((_, i) => (
              <StudentItem key={i} i={i} />
            ))}
        </ul>
      </section>
    </S.StatisticsWrap>
  );
};

export default Statistics;
