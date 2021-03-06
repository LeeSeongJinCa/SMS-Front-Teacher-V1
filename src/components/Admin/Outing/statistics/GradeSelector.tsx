import React, { ChangeEvent, FC, memo, useCallback } from "react";

import { GradeIds, GradeState } from "../../../../lib/hooks/useGradeSelector";

interface Props {
  gradeSelect: GradeState;
  gradeHandler: (id: string) => void;
}

interface Selectors {
  id: GradeIds;
  text: string;
}

const selectors: Selectors[] = [
  {
    id: "grade-1",
    text: "1학년"
  },
  {
    id: "grade-2",
    text: "2학년"
  },
  {
    id: "grade-3",
    text: "3학년"
  }
];

const GradeSelector: FC<Props> = ({ gradeSelect, gradeHandler }) => {
  const onChangeGrade = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    gradeHandler(e.currentTarget.id);
  }, []);

  return (
    <div className="grade-wrap">
      <span>학년</span>
      <ul>
        {selectors.map(({ id, text }) => (
          <li key={id}>
            <label htmlFor={id}>
              <input
                type="checkbox"
                id={id}
                defaultChecked={gradeSelect[id]}
                onChange={onChangeGrade}
              />
              <span>{text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(GradeSelector);
