import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import AES256 from "aes-everywhere";

import { StudentInfo } from "../../modules/type/user";
import { getAxiosError } from "../utils";

export const SERVER = {
  hostUrl: process.env.HOST_URL,
  version: process.env.VERSION,
  s3Url: process.env.S3_URL,
  securityBasePlain: process.env.SECURITY_BASE_PLAIN,
  securityPassPhrase: process.env.SECURITY_PASS_PHRASE
};

export const BASE_URL = `${SERVER.hostUrl}${SERVER.version}`;

const removeAllStorage = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("club_uuid");
  localStorage.removeItem("expiration");
  localStorage.removeItem("sms-type");
  localStorage.removeItem("sms-user");
  localStorage.removeItem("uuid");
};

export const apiDefault = () => {
  const instance = axios.create({
    baseURL: BASE_URL
  });
  const refreshUrl = "/login";

  instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("access_token");
    const expiration = localStorage.getItem("expiration");

    if (expiration) {
      const now = new Date().getTime();
      const expTime = new Date(expiration).getTime();

      if (expTime < now) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("uuid");
        localStorage.removeItem("expiration");

        alert(
          "자동 로그인 세션이 만료되었습니다. 재로그인 후 다시 실행해주시기 바랍니다."
        );

        window.location.href = refreshUrl;
      }
    }
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      "Request-Security": AES256.encrypt(
        `${SERVER.securityBasePlain}:${(+new Date() + "").slice(0, 10)}`,
        SERVER.securityPassPhrase
      )
    };

    return config;
  });

  instance.interceptors.response.use(
    res => res,
    err => {
      const { status } = getAxiosError(err);

      if (status === 400) {
        toast.error("유효하지 않은 요청이 발생했습니다.");
      } else if (status === 401) {
        alert("로그인 후 이용해주세요.");
        removeAllStorage();
        window.location.href = refreshUrl;
      } else if (status === 403) {
        alert("잘못된 접근 입니다.");
        window.location.href = refreshUrl;
      } else if (status === 407) {
        toast.error("서버에 요류가 발생했습니다.");
      } else if (status === 429) {
        toast.error("한 번에 너무 많은 요청이 발생했습니다.");
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

export const getStudentData = (
  uuid: string
): Promise<AxiosResponse<StudentInfo>> =>
  apiDefault().get<StudentInfo>(`/students/uuid/${uuid}`);

export const getStudentDatas = (
  uuids: string[]
): Promise<AxiosResponse<StudentInfo>[]> => {
  return Promise.all<AxiosResponse<StudentInfo>>(
    uuids.map(async uuid => await getStudentData(uuid))
  );
};
