import { apiDefault } from "../client";
import {
  ResTeacherLoginWithDefault,
  ResTeacherInfoWithDefault
} from "../payloads/Login";

export const postLoginTeacher = (id: string, pw: string) => {
  return apiDefault().post<ResTeacherLoginWithDefault>("/login/teacher", {
    teacher_id: id,
    teacher_pw: pw
  });
};

export const getTeacherInfo = (teacherUuid: string) => {
  return apiDefault().get<ResTeacherInfoWithDefault>(
    `/teachers/uuid/${teacherUuid}`
  );
};
