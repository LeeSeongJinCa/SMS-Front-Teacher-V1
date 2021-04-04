import React, { FC } from "react";

import * as S from "./style";

import useHeader from "../../lib/hooks/useHeader";

interface Props {}

const Header: FC<Props> = () => {
  const [name, logout] = useHeader();

  if (!name) {
    return (
      <S.HeaderWrap>
        <S.Account to="/login">로그인</S.Account>
      </S.HeaderWrap>
    );
  }

  return (
    <S.HeaderWrap>
      <S.UserInfo>{name} 선생님</S.UserInfo>
      <S.MovePageWithLink to="/user">내 정보 변경</S.MovePageWithLink>
      <S.MovePageWithLink to="/pw-change">비밀번호 변경</S.MovePageWithLink>
      <S.Account to="/login" onClick={logout}>
        로그아웃
      </S.Account>
    </S.HeaderWrap>
  );
};

export default Header;
