import React, { FC, useCallback, useEffect, useState, MouseEvent } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { BoardWriteFilter } from "../../../lib/api/payloads/Board";

interface Props {
  onChange: (data: BoardWriteFilter) => void;
}

export interface BoardWriteFilterSate {
  grade: [number, number, number];
  group: [number, number, number, number];
}

const initialState = {
  grade: [0, 0, 0],
  group: [0, 0, 0, 0]
};

const WriteCategory: FC<Props> = ({ onChange }) => {
  const [filterData, setFilterData] = useState<BoardWriteFilterSate>({
    grade: [0, 0, 0],
    group: [0, 0, 0, 0]
  });

  const [allSelect, setAllSelect] = useState<{
    grade: boolean;
    group: boolean;
  }>({ grade: true, group: true });

  useEffect(() => {
    const grade: number = Number(
      filterData.grade.reduce(
        (state, value) => (value ? state + `${value}` : state),
        ""
      )
    );

    const group: number = Number(
      filterData.group.reduce(
        (state, value) => (value ? state + `${value}` : state),
        ""
      )
    );

    if (allSelect.grade) {
      onChange({ target_grade: 123, target_group: 1234 });
      return;
    }
    if (allSelect.group) {
      onChange({ target_grade: grade, target_group: 1234 });
      return;
    }
    onChange({ target_group: group, target_grade: grade });
  }, [filterData, allSelect]);

  const allChangeHandler = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      const { name } = e.currentTarget;

      if (name === "grade" && filterData.group.includes(1)) {
        toast.error("학년이 전체일 경우 특정반을 선택할 수 없습니다.");
        return;
      }
      setFilterData(prev => ({ ...prev, [name]: initialState[name] }));
      setAllSelect(prev => ({ ...prev, [name]: !prev[name] }));
    },
    [filterData]
  );

  const changeHandler = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      const { name, value: targetI, checked } = e.currentTarget;

      const [grade1, grade2, grade3] = filterData.grade;
      const isIncludeTrue = filterData.group.reduce(
        (state, num) => state || Boolean(num),
        false
      );

      const arrs = [grade1, grade2, grade3];
      arrs[Number(targetI) - 1] = Number(targetI);
      const sum = arrs[0] + arrs[1] + arrs[2];

      if (
        (name === "group" && allSelect.grade) ||
        (name === "group" && grade1 && grade2 && grade3) ||
        (name === "grade" && isIncludeTrue && sum === 6)
      ) {
        toast.error("학년이 전체일 경우 특정반을 선택할 수 없습니다.");
        return;
      }
      setAllSelect(prev => ({ ...prev, [name]: false }));
      if (!checked) {
        setFilterData(prev => ({
          ...prev,
          [name]: prev[name].map((value, i) =>
            i + 1 === Number(targetI) ? 0 : value
          )
        }));
        return;
      }
      setFilterData(prev => ({
        ...prev,
        [name]: prev[name].map((value, i) =>
          i + 1 === Number(targetI) ? i + 1 : value
        )
      }));
    },
    [allSelect, filterData]
  );

  return (
    <S.WriteCatrgoty>
      <span>학년</span>
      <div>
        <label>
          <input
            checked={allSelect.grade}
            onClick={allChangeHandler}
            name="grade"
            type="checkbox"
          />
          <span>전체</span>
        </label>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.grade[0]}
            name="grade"
            value="1"
            type="checkbox"
          />
          <span>1학년</span>
        </label>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.grade[1]}
            name="grade"
            value="2"
            type="checkbox"
          />
          <span>2학년</span>
        </label>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.grade[2]}
            name="grade"
            value="3"
            type="checkbox"
          />
          <span>3학년</span>
        </label>
      </div>
      <S.Hr />
      <span>반</span>
      <div>
        <input
          onClick={allChangeHandler}
          checked={allSelect.group}
          name="group"
          value="0"
          type="checkbox"
        />
        <span>전체</span>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.group[0]}
            name="group"
            value="1"
            type="checkbox"
          />
          <span>1반</span>
        </label>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.group[1]}
            name="group"
            value="2"
            type="checkbox"
          />
          <span>2반</span>
        </label>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.group[2]}
            name="group"
            value="3"
            type="checkbox"
          />
          <span>3반</span>
        </label>
        <label>
          <input
            onClick={changeHandler}
            checked={!!filterData.group[3]}
            name="group"
            value="4"
            type="checkbox"
          />
          <span>4반</span>
        </label>
      </div>
    </S.WriteCatrgoty>
  );
};

export default WriteCategory;
