import React, { FC } from "react";

import * as S from "./style";

import useHeader from "../../lib/hooks/useHeader";

interface Props {}

const Header: FC<Props> = () => {
  const [name, logout] = useHeader();

  if (!name) {
    return (
      <S.HeaderWrap>
        <S.Logout to="/login">로그인</S.Logout>
      </S.HeaderWrap>
    );
  }

  return (
    <S.HeaderWrap>
      <S.UserInfo>{name} 선생님</S.UserInfo>
      <S.MovePasswordChange to="/pw-change">비밀번호 변경</S.MovePasswordChange>
      <S.Logout to="/logout" onClick={logout}>
        로그아웃
      </S.Logout>
    </S.HeaderWrap>
  );
};

export default Header;
