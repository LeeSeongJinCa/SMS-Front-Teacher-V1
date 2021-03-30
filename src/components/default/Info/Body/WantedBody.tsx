import React, { FC } from "react";
import * as S from "./styles";
import WantedMain from "./Main/WantedMain";
import AllSub from "./Sub/AllSub";

const WantedBody: FC = () => {
  return (
    <S.Container>
      <WantedMain />
      <AllSub />
    </S.Container>
  );
};

export default WantedBody;
