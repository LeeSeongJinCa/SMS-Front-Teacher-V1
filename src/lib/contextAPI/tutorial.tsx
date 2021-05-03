import React, { useReducer, useContext, createContext, Dispatch } from "react";

export const SET_TUTORIAL = "tutorial/SET_TUTORIAL" as const;

export type TutorialState = {
  step: number;
};

export const setTutorial = (step: number) => ({
  type: SET_TUTORIAL,
  payload: { step }
});

type TutorialAction = ReturnType<typeof setTutorial>;

type TutorialDispatch = Dispatch<TutorialAction>;

const tutorialState: TutorialState = {
  step: 0
};

const TutorialStateContext = createContext<TutorialState>({
  ...tutorialState
});
const TutorialDispatchContext = createContext<TutorialDispatch | null>(null);

const reducer = (
  state: TutorialState,
  action: TutorialAction
): TutorialState => {
  switch (action.type) {
    case SET_TUTORIAL:
      return {
        ...state,
        step: action.payload.step
      };
    default:
      throw new Error("Unhandled action");
  }
};

export const TutorialProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...tutorialState });

  return (
    <TutorialStateContext.Provider value={state}>
      <TutorialDispatchContext.Provider value={dispatch}>
        {children}
      </TutorialDispatchContext.Provider>
    </TutorialStateContext.Provider>
  );
};

export function useTutorialState() {
  const state = useContext(TutorialStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useTutorialDispatch() {
  const dispatch = useContext(TutorialDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
