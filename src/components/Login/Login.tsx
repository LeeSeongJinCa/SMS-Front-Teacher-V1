import React, { FC } from "react";

import * as S from "./style";

import { Eye, EyeOff } from "../../assets";
import Loading from "../default/Loading/Loading";
import useLogin from "../../lib/hooks/useLogin";
import useLoading from "../../lib/hooks/common/useLoading";

interface Props {}

const Login: FC<Props> = () => {
  const [loading, startLoading, endLoading] = useLoading();
  const [
    id,
    pw,
    showPw,
    errorMessage,
    handleId,
    handlePw,
    toggleEye,
    login
  ] = useLogin(startLoading, endLoading);

  return (
    <S.LoginWrap>
      <S.LoginForm>
        <div>
          <S.LoginTitle>로그인</S.LoginTitle>
          <S.LoginSubTitle>SMS 사용을 위해 로그인 해주세요.</S.LoginSubTitle>
        </div>
        <S.LoginInputsWrap>
          <S.LoginLabel htmlFor="id">
            <S.LoginInput
              type="text"
              placeholder="아이디"
              id="id"
              onChange={handleId}
              value={id}
              autoFocus={true}
            />
          </S.LoginLabel>
          <S.LoginLabel htmlFor="current-password">
            <S.LoginInput
              type={showPw ? "text" : "password"}
              placeholder="비밀번호"
              id="current-password"
              onChange={handlePw}
              value={pw}
            />
            <S.Eye
              src={showPw ? Eye : EyeOff}
              alt="eye"
              title="eye"
              onClick={toggleEye}
            />
          </S.LoginLabel>
          <S.ErrorMessage>{errorMessage.message}</S.ErrorMessage>
          {loading && <Loading />}
          <S.LoginButton
            onClick={e => {
              e.preventDefault();
              login(id, pw);
            }}
          >
            로그인
          </S.LoginButton>
          <S.AutoLogin>
            <S.GoAccountPage to="/account">
              아직 계정이 없으신가요?
            </S.GoAccountPage>
          </S.AutoLogin>
        </S.LoginInputsWrap>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default Login;
