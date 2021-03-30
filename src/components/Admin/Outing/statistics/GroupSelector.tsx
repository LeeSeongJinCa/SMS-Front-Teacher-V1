import React, { ChangeEvent, FC, memo, useCallback } from "react";

import { GroupIds } from "../../../../lib/hooks/useGroupSelector";

interface Props {
  groupHandler: (id: string) => void;
}

interface Selectors {
  id: GroupIds;
  text: string;
}

const selectors: Selectors[] = [
  {
    id: "group-all",
    text: "전체"
  },
  {
    id: "group-1",
    text: "1반"
  },
  {
    id: "group-2",
    text: "2반"
  },
  {
    id: "group-3",
    text: "3반"
  }
];

const GroupSelector: FC<Props> = ({ groupHandler }) => {
  const onChangeGroup = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    groupHandler(e.currentTarget.id);
  }, []);

  return (
    <div className="group-wrap">
      <span>반</span>
      <ul>
        {selectors.map(({ id, text }) => (
          <li key={id}>
            <label htmlFor={id}>
              <input
                type="checkbox"
                id={id}
                defaultChecked={id === "group-all"}
                onChange={onChangeGroup}
              />
              <span>{text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(GroupSelector);
