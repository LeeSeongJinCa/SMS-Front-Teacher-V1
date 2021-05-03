import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

import { PageNotFound } from "../../../assets";

interface Props {}

const NotFound: FC<Props> = () => {
  return (
    <S.NotFound>
      <S.Center>
        <S.NotFound404
          src={PageNotFound}
          alt="page not found"
          title="page not found"
        />
        <S.NotFoundAnyThing>아무것도 없네요!</S.NotFoundAnyThing>
        <S.NotFoundGoHome>
          <Link to="/">홈으로</Link>
        </S.NotFoundGoHome>
      </S.Center>
    </S.NotFound>
  );
};

export default NotFound;
