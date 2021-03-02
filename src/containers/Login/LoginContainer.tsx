import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Login } from "../../components";
import { postLoginTeacher } from "../../lib/api/Login";
import {
  PASSWORD_NOT_MATCHED,
  UNABLE_FORM,
  UNAUTHORIZED
} from "../../lib/api/payloads/Login";
import { getAxiosError } from "../../lib/utils";
import { getTeacherInfoSaga } from "../../modules/action/header";
import { pageMove } from "../../modules/action/page";
import WithLoadingContainer, {
  LoadingProps
} from "../Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

export interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState = {
  status: false,
  message: ""
};

const LoginContainer: FC<Props> = ({ loading, startLoading, endLoading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);

  const errorMessageMacro = (
    message:
      | typeof UNABLE_FORM
      | typeof UNAUTHORIZED
      | typeof PASSWORD_NOT_MATCHED
  ) => {
    setErrorMessage({
      status: true,
      message
    });
  };

  const storageHandler = useCallback(
    (autoLogin: boolean, accessToken: string, uuid: string) => {
      const MillisecondINHour = 3600000;

      if (autoLogin) {
        localStorage.removeItem("expiration");
      } else {
        localStorage.setItem("expiration", `${Date.now() + MillisecondINHour}`);
      }
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem(`uuid`, uuid);
    },
    []
  );

  const getTeacherLoginInfo = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      const { data } = await postLoginTeacher(id, pw);
      const { access_token, teacher_uuid } = data;

      storageHandler(autoLogin, access_token, teacher_uuid);

      return teacher_uuid;
    },
    []
  );

  const teacherLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const teacherUuid = await getTeacherLoginInfo(id, pw, autoLogin);
    localStorage.removeItem("club_uuid");
    dispatch(getTeacherInfoSaga(teacherUuid));
  };

  const login = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      startLoading();
      try {
        await teacherLogin(id, pw, autoLogin);
        setErrorMessage(initErrorState);
        dispatch(pageMove("홈"));
        history.push("/");
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 404) {
          errorMessageMacro(UNAUTHORIZED);
        } else if (status === 409 && (code === -401 || code === -411)) {
          errorMessageMacro(UNAUTHORIZED);
        } else if (status === 409 && (code === -402 || code === -412)) {
          errorMessageMacro(PASSWORD_NOT_MATCHED);
        }

        setPw("");
        endLoading();
      }
    },
    []
  );

  const handleId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  }, []);

  const handlePw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  }, []);

  const toggleAutoLogin = useCallback(() => {
    setAutoLogin(prev => !prev);
  }, [autoLogin]);

  return (
    <Login
      loading={loading}
      id={id}
      pw={pw}
      autoLogin={autoLogin}
      errorMessage={errorMessage}
      handleId={handleId}
      handlePw={handlePw}
      toggleAutoLogin={toggleAutoLogin}
      login={login}
    />
  );
};

export default WithLoadingContainer(LoginContainer);
