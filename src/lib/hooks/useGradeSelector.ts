import { useReducer } from "react";

export type GradeIds = "grade-all" | "grade-1" | "grade-2" | "grade-3";

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
  "grade-all": true,
  "grade-1": false,
  "grade-2": false,
  "grade-3": false
};

const useGradeSelector = () => {
  const [gradeState, dispatch] = useReducer(reducer, initialState);

  const dispatchGrade = (id: GradeIds) => {
    dispatch({ type: "toggle", id });
  };

  return [gradeState, dispatchGrade] as const;
};

export default useGradeSelector;
