import React, { FC, MouseEvent, memo } from "react";

import * as S from "./styles";

interface ToggleSet {
  color: string;
  backgroundColor: string;
  text: string;
}

export interface Props {
  activeSet: ToggleSet;
  defaultSet: ToggleSet;
  circleColor: string;
  isActive: boolean;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Toggle: FC<Props> = ({
  activeSet,
  circleColor,
  clickHandler,
  isActive,
  defaultSet
}) => {
  const {
    backgroundColor: activeBackgroundColor,
    color: activeColor,
    text: activeText
  } = activeSet;

  const {
    backgroundColor: defaultBackgroundColor,
    color: defaultColor,
    text: defaultText
  } = defaultSet;

  return (
    <S.Container
      onClick={clickHandler}
      backgroundColor={
        isActive ? activeBackgroundColor : defaultBackgroundColor
      }
    >
      {isActive ? (
        <>
          <S.Text color={activeColor}>{activeText}</S.Text>
          <S.Circle backgroundColor={circleColor} />
        </>
      ) : (
        <>
          <S.Circle backgroundColor={circleColor} />
          <S.Text color={defaultColor}>{defaultText}</S.Text>
        </>
      )}
    </S.Container>
  );
};

export default memo(Toggle);
