import React, { FC } from "react";

import * as S from "./styles";

const NavigationSubHeader: FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default NavigationSubHeader;
