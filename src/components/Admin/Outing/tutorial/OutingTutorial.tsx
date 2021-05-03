import React, { MouseEvent, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";

import * as S from "./style";

import { tutorials } from "../../../../lib/static";
import {
  setTutorial,
  useTutorialDispatch,
  useTutorialState
} from "../../../../lib/contextAPI/tutorial";

const OutingTutorial = ({ endTutorial }: { endTutorial: () => void }) => {
  const history = useHistory();
  const { step } = useTutorialState();
  const dispatch = useTutorialDispatch();

  const onClickPrevStep = () => {
    if (step === 0) return;
    dispatch(setTutorial(step - 1));
  };

  const onClickNextStep = () => {
    if (step + 1 === tutorials.length) return;
    dispatch(setTutorial(step + 1));
  };

  const onClickMoveStep = (e: MouseEvent<HTMLLIElement>) => {
    dispatch(setTutorial(+e.currentTarget.dataset.step));
  };

  const skipTutorial = () => {
    dispatch(setTutorial(0));
    endTutorial();
  };

  useEffect(() => {
    if (history.location.pathname !== tutorials[step].page) {
      history.push(tutorials[step].page);
    }
  }, [step]);

  return (
    <>
      <S.TestContainerBack />
      <S.TestContainer {...tutorials[step]}>
        <div>
          {tutorials[step].texts.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <ul>
          {tutorials.map((_, i) => {
            const className = i <= step ? "prev" : "";
            return (
              <li
                key={i}
                className={className}
                data-step={i}
                onClick={onClickMoveStep}
              />
            );
          })}
        </ul>
        <p>
          <span>단계</span>
          <span>
            {step + 1} / {tutorials.length}
          </span>
        </p>
        <nav>
          <div>
            <button onClick={onClickPrevStep}>뒤로</button>
            {step + 1 === tutorials.length ? (
              <button onClick={endTutorial}>마치기</button>
            ) : (
              <button onClick={onClickNextStep}>앞으로</button>
            )}
          </div>
          <button onClick={skipTutorial}>건너뛰기</button>
        </nav>
      </S.TestContainer>
    </>
  );
};

const OutingTutorialPortal = (props: { endTutorial: () => void }) => {
  return ReactDOM.createPortal(
    <OutingTutorial {...props} />,
    document.getElementById("tutorial")
  );
};

export default OutingTutorialPortal;
