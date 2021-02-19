import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { stateType } from "../../modules/reducer";

interface Props {
  logout: () => void;
  moveLogin: () => void;
  movePasswordChange: () => void;
}

const Header: FC<Props> = ({ logout, moveLogin, movePasswordChange }) => {
  const { type, name } = useSelector((state: stateType) => state.header);

  if (!type) {
    return (
      <S.HeaderWrap>
        <S.Logout onClick={moveLogin}>로그인</S.Logout>
      </S.HeaderWrap>
    );
  }

  return (
    <S.HeaderWrap>
      <S.UserInfo>{name} 선생님</S.UserInfo>
      <S.MovePasswordChange onClick={movePasswordChange}>
        비밀번호 변경
      </S.MovePasswordChange>
      <S.Logout
        onClick={() => {
          logout();
          moveLogin();
        }}
      >
        로그아웃
      </S.Logout>
    </S.HeaderWrap>
  );
};

export default Header;
