import React, { FC } from "react";
import * as S from "./styles";
import AllMain from "./Main/AllMain";
import AllSub from "./Sub/AllSub";

const AllBody: FC = () => {
  return (
    <S.Container>
      <AllMain />
      <AllSub />
    </S.Container>
  );
};

export default AllBody;
