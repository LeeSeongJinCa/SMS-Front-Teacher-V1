import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import { East, West } from "../../../../assets";

import { tutorials } from "../../../../lib/static";

import * as S from "./style";

const OutingTutorial = ({ endTutorial }: { endTutorial: () => void }) => {
  const history = useHistory();
  const [step, setStep] = useState<number>(0);

  const onClickPrevStep = () => {
    if (step === 0) return;
    setStep(prev => prev - 1);
  };

  const onClickNextStep = () => {
    if (step + 1 === tutorials.length) return;
    setStep(prev => prev + 1);
  };

  const skipTutorial = () => {
    setStep(0);
    endTutorial();
  };

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
          {Array(tutorials.length)
            .fill(0)
            .map((_, i) => {
              const className = i <= step ? "prev" : "";
              return <li key={i} className={className} />;
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
            {step + 1 === tutorials.length && (
              <>
                <button onClick={onClickPrevStep}>뒤로</button>
                <button onClick={onClickNextStep}>앞으로</button>
              </>
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
