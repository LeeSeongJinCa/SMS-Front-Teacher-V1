import { useReducer } from "react";

export type GradeIds = "grade-1" | "grade-2" | "grade-3";

export type GradeState = Record<GradeIds, boolean>;

type GradeAction = { type: "toggle"; id: GradeIds };

type GradeReducer<S, A> = (prevState: S, action: A) => S;

const reducer: GradeReducer<GradeState, GradeAction> = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, [action.id]: !state[action.id] };
    default:
      return state;
  }
};

const initialState: GradeState = {
  "grade-1": true,
  "grade-2": true,
  "grade-3": true
};

const useGradeSelector = () => {
  const [gradeState, dispatch] = useReducer(reducer, initialState);

  const dispatchGrade = (id: GradeIds) => {
    dispatch({ type: "toggle", id });
  };

  return [gradeState, dispatchGrade] as const;
};

export default useGradeSelector;
