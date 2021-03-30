import React, { ChangeEvent, FC, memo, useCallback } from "react";

import { GroupIds, GroupState } from "../../../../lib/hooks/useGroupSelector";

interface Props {
  groupSelect: GroupState;
  groupHandler: (id: string) => void;
}

interface Selectors {
  id: GroupIds;
  text: string;
}

const selectors: Selectors[] = [
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
  },
  {
    id: "group-4",
    text: "4반"
  }
];

const GroupSelector: FC<Props> = ({ groupSelect, groupHandler }) => {
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
                defaultChecked={groupSelect[id]}
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
