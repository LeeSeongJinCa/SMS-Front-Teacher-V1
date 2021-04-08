import React, { FC } from "react";

import * as S from "./style";

import Loading from "../default/Loading/Loading";
import { Eye, EyeOff } from "../../assets";
import useLogin from "../../lib/hooks/useLogin";
import WithLoadingContainer, {
  LoadingProps
} from "../../containers/Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

const Login: FC<Props> = ({ startLoading, endLoading, loading }) => {
  const [
    id,
    pw,
    showPw,
    autoLogin,
    errorMessage,
    handleId,
    handlePw,
    toggleEye,
    toggleAutoLogin,
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
              login(id, pw, autoLogin);
            }}
          >
            로그인
          </S.LoginButton>
          <S.AutoLogin>
            <S.AutoLoginLabel htmlFor="auto-login">
              <input
                type="checkbox"
                id="auto-login"
                onChange={toggleAutoLogin}
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    e.currentTarget.checked = !e.currentTarget.checked;
                    toggleAutoLogin();
                  }
                }}
              />
              <S.AutoLoginCheckbox id="auto-login-checkbox" />
              <span>자동로그인</span>
            </S.AutoLoginLabel>
            <S.GoAccountPage to="/account">
              아직 계정이 없으신가요?
            </S.GoAccountPage>
          </S.AutoLogin>
        </S.LoginInputsWrap>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default WithLoadingContainer(Login);
