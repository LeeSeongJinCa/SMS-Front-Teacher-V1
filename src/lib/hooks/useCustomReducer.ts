import { Reducer, useReducer } from "react";

function useCustomReducer<S, A>(reducer: Reducer<S, A>, initialState: S) {
  const [groupState, dispatch] = useReducer(reducer, initialState);

  return [groupState, dispatch] as const;
}

export default useCustomReducer;
