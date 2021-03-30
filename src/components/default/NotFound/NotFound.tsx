import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as S from "./style";

import { PageNotFound } from "../../../assets";
import { pageMove } from "../../../modules/action/page";

interface Props {}

const NotFound: FC<Props> = () => {
  const dispatch = useDispatch();

  const moveHome = () => {
    dispatch(pageMove("홈"));
  };

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
          <Link to="/" onClick={moveHome}>
            홈으로
          </Link>
        </S.NotFoundGoHome>
      </S.Center>
    </S.NotFound>
  );
};

export default NotFound;
