import React, { FC, memo, useMemo } from "react";

import * as S from "./style";
import StudentItem from "./StudentItem";
import GradeSelector from "./GradeSelector";
import GroupSelector from "./GroupSelector";

import { SearchIcon } from "../../../../assets";
import useStatisticsSelector from "../../../../lib/hooks/useStatisticsSelector";
import useEndStudents from "../../../../lib/hooks/useEndStudents";

interface Props {}

const Statistics: FC<Props> = () => {
  const [
    gradeSelect,
    groupSelect,
    gradeHandler,
    groupHandler
  ] = useStatisticsSelector();
  const [endStudents, loading] = useEndStudents();

  const displayStudentItem = useMemo(() => {
    return Array.from(endStudents)
      .filter(student => {
        const sNumber = student[0];
        const grade = sNumber[0];
        const group = sNumber[1];

        if (!gradeSelect["grade-1"] && grade === "1") return false;
        if (!gradeSelect["grade-2"] && grade === "2") return false;
        if (!gradeSelect["grade-3"] && grade === "3") return false;

        if (!groupSelect["group-1"] && group === "1") return false;
        if (!groupSelect["group-2"] && group === "2") return false;
        if (!groupSelect["group-3"] && group === "3") return false;
        if (!groupSelect["group-4"] && group === "4") return false;

        return true;
      })
      .map((student, i) => {
        const numberName = student[0];
        const subList = student[1];
        return <StudentItem key={i} student={numberName} subList={subList} />;
      });
  }, [endStudents, gradeSelect, groupSelect]);

  return (
    <S.StatisticsWrap>
      <aside>
        <S.SelectorWrap className="selector-wrap">
          <GradeSelector
            gradeSelect={gradeSelect}
            gradeHandler={gradeHandler}
          />
          <GroupSelector
            groupSelect={groupSelect}
            groupHandler={groupHandler}
          />
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
            <span>지각횟수</span>
          </li>
          {endStudents.size ? (
            displayStudentItem
          ) : loading ? (
            <div>외출 통계 내역을 불러오고 있습니다. 잠시만 기다려주세요.</div>
          ) : (
            <div>외출 통계 내역이 없습니다.</div>
          )}
        </ul>
      </section>
    </S.StatisticsWrap>
  );
};

export default memo(Statistics);
