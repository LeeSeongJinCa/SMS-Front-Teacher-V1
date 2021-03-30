import useCustomReducer from "./useCustomReducer";

export type GroupIds = "group-1" | "group-2" | "group-3" | "group-4";

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
  "group-1": true,
  "group-2": true,
  "group-3": true,
  "group-4": true
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
