import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";

import * as S from "./style";

import { ErrorState } from "../../containers/Login/LoginContainer";
import Loading from "../default/Loading/Loading";
import { CapsLock as CapsLockIcon, Eye, EyeOff } from "../../assets";

interface Props {
  loading: boolean;
  id: string;
  pw: string;
  autoLogin: boolean;
  errorMessage: ErrorState;
  handleId: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePw: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleAutoLogin: () => void;
  login: (id: string, pw: string, autoLogin: boolean) => Promise<any>;
}

const Login: FC<Props> = ({
  loading,
  id,
  pw,
  handleId,
  handlePw,
  autoLogin,
  toggleAutoLogin,
  errorMessage,
  login
}) => {
  const [capsLock, setCapsLock] = useState<boolean>(false);
  const [showPw, setShowPw] = useState<boolean>(false);

  const handleCapsLock = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const shiftKey = e.shiftKey;

    if (
      (key >= "A" && key <= "Z" && !shiftKey) ||
      (key >= "a" && key <= "z" && shiftKey)
    ) {
      setCapsLock(true);
      return;
    }
    setCapsLock(false);
  };

  const toggleEye = () => {
    setShowPw(prev => !prev);
  };

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
              onKeyPress={e => {
                if (e.key === "Enter") {
                  login(id, pw, autoLogin);
                  return;
                }
                handleCapsLock(e);
              }}
              onChange={handlePw}
              value={pw}
            />
            {showPw ? (
              <S.Eye
                src={Eye}
                alt="see password"
                title="see password"
                onClick={toggleEye}
              />
            ) : (
              <S.Eye
                src={EyeOff}
                alt="Don't see password"
                title="Don't see password"
                onClick={toggleEye}
              />
            )}
            {capsLock && (
              <S.CapsLockImg
                src={CapsLockIcon}
                alt="caps lock is on"
                title="caps lock is on"
              />
            )}
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

export default Login;
