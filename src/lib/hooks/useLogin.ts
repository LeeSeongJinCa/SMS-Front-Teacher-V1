import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import useLoginInputs from "./useLoginInputs";
import useLoginToggle from "./useLoginToggle";

import { getTeacherInfoSaga } from "../../modules/action/header";
import { postLoginTeacherWithPick } from "../api/Login";
import {
  PASSWORD_NOT_MATCHED,
  UNABLE_FORM,
  NEED_ADMIN_ACCEPT,
  CAN_NOT_FOUND_ACCOUNT
} from "../api/payloads/Login";
import { getAxiosError } from "../utils";

interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState: ErrorState = {
  status: false,
  message: ""
};

const useLogin = (startLoading: () => void, endLoading: () => void) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, pw, handleId, handlePw] = useLoginInputs();
  const [showPw, autoLogin, toggleEye, toggleAutoLogin] = useLoginToggle();
  const [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);

  const errorMessageMacro = (message: string) => {
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
      const { data } = await postLoginTeacherWithPick(id, pw);
      const { access_token, teacher_uuid } = data;

      storageHandler(autoLogin, access_token, teacher_uuid);

      return teacher_uuid;
    },
    []
  );

  const teacherLogin = async (id: string, pw: string, autoLogin: boolean) => {
    const teacherUuid = await getTeacherLoginInfo(id, pw, autoLogin);
    dispatch(getTeacherInfoSaga(teacherUuid));
  };

  const login = useCallback(
    async (id: string, pw: string, autoLogin: boolean) => {
      if (id.length < 4 || id.length > 16 || pw.length < 4 || pw.length > 16) {
        errorMessageMacro(UNABLE_FORM);
        return;
      }

      startLoading();
      try {
        await teacherLogin(id, pw, autoLogin);
        setErrorMessage(initErrorState);
        history.push("/");
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 409 && code === -412) {
          errorMessageMacro(PASSWORD_NOT_MATCHED);
        } else if (status === 409 && code === -413) {
          errorMessageMacro(NEED_ADMIN_ACCEPT);
        } else if (status === 409 && code === -414) {
          errorMessageMacro(CAN_NOT_FOUND_ACCOUNT);
        }

        endLoading();
      }
    },
    []
  );

  return [
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
  ] as const;
};

export default useLogin;
