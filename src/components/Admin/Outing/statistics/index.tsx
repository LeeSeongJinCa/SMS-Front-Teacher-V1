import React, { FC, memo, useMemo } from "react";

import * as S from "./style";
import StudentItem from "./StudentItem";
import GradeSelector from "./GradeSelector";
import GroupSelector from "./GroupSelector";

import { SearchIcon } from "../../../../assets";
import useStatisticsSelector from "../../../../lib/hooks/useStatisticsSelector";
import useEndStudents from "../../../../lib/hooks/useEndStudents";
import useSearchInput from "../../../../lib/hooks/useSearchInput";
import usePeriod from "../../../../lib/hooks/usePeriod";

export type Period = 0 | 1 | 7 | 30;

interface Props {}

const Statistics: FC<Props> = () => {
  const [
    gradeState,
    groupState,
    gradeHandler,
    groupHandler,
    filterSelector
  ] = useStatisticsSelector();
  const [searchInput, onChangeSearch, filterSearch] = useSearchInput();
  const [endStudents, loading] = useEndStudents();
  const [period, handlePeriod, filterPeriod] = usePeriod();

  const displayStudentItem = useMemo(() => {
    return Array.from(endStudents)
      .filter(filterSelector)
      .filter(filterSearch)
      .map((student, i) => {
        const numberName = student[0];
        const subList = student[1];
        return (
          <StudentItem
            key={i}
            student={numberName}
            subList={subList}
            period={period}
            filterPeriod={filterPeriod}
          />
        );
      });
  }, [endStudents, gradeState, groupState, searchInput, period]);

  return (
    <S.StatisticsWrap>
      <aside>
        <S.SelectorWrap className="selector-wrap">
          <GradeSelector gradeSelect={gradeState} gradeHandler={gradeHandler} />
          <GroupSelector groupSelect={groupState} groupHandler={groupHandler} />
        </S.SelectorWrap>
        <div>
          <S.SearchWrap className="search-wrap">
            <div>
              <img
                src={SearchIcon}
                alt="search student"
                title="search student"
              />
              <input
                placeholder="학생 이름을 입력하세요."
                onChange={onChangeSearch}
                value={searchInput}
              />
            </div>
          </S.SearchWrap>
          <S.PeriodWrap className="period-wrap" htmlFor="period">
            <span>외출 날짜 기간</span>
            <select onChange={handlePeriod}>
              <option value={0}>기간 없음</option>
              <option value={1}>하루 전</option>
              <option value={7}>일주일 전</option>
              <option value={30}>한달 전</option>
            </select>
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
            <S.NoDisplayList>
              외출 통계 내역을 불러오고 있습니다. 잠시만 기다려주세요.
            </S.NoDisplayList>
          ) : (
            <S.NoDisplayList>외출 통계 내역이 없습니다.</S.NoDisplayList>
          )}
        </ul>
      </section>
    </S.StatisticsWrap>
  );
};

export default memo(Statistics);
