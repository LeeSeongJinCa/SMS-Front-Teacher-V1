import useCustomReducer from "./useCustomReducer";

export type GroupIds = "group-all" | "group-1" | "group-2" | "group-3";

export type GroupState = Record<GroupIds, boolean>;

type GroupAction = { type: "toggle"; id: GroupIds };

const reducer = (state: GroupState, action: GroupAction) => {
  switch (action.type) {
    case "toggle":
      return { ...state, [action.id]: !state[action.id] };
    default:
      return state;
  }
};

const initialState: GroupState = {
  "group-all": true,
  "group-1": false,
  "group-2": false,
  "group-3": false
};

const useGroupSelector = () => {
  const [groupState, dispatch] = useCustomReducer<GroupState, GroupAction>(
    reducer,
    initialState
  );

  const dispatchGroup = (id: GroupIds) => {
    dispatch({ type: "toggle", id });
  };

  return [groupState, dispatchGroup] as const;
};

export default useGroupSelector;
