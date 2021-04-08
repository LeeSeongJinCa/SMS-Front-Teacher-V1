import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ResStudentInfo } from "../api/payloads/Login";
import useCustomSelector from "./useCustomSelector";

import { setInit } from "../../modules/action/header";
import { initialState as headerInitialState } from "../../modules/reducer/header";

const useHeader = () => {
  const dispatch = useDispatch();
  const { name } = useCustomSelector().header;

  const logout = useCallback(() => {
    dispatch(setInit(headerInitialState, ""));
    localStorage.setItem("sms-user", JSON.stringify({}));
    localStorage.setItem("sms-type", "");
    localStorage.removeItem("access_token");
    localStorage.removeItem("uuid");
    localStorage.removeItem("club_uuid");
    localStorage.removeItem("expiration");
  }, []);

  useEffect(() => {
    const clubUuid = localStorage.getItem("club_uuid");
    const smsUser = JSON.parse(
      localStorage.getItem("sms-user")
    ) as ResStudentInfo;

    dispatch(setInit(smsUser, clubUuid));
  }, []);

  return [name, logout] as const;
};

export default useHeader;
