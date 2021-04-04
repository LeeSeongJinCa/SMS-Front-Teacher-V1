import {
  ResStudentInfo,
  ResTeacherInfo
} from "../../../lib/api/payloads/Login";

export const SET_INIT = "header/SET_INIT" as const;
export const SET_TYPE = "header/SET_TYPE" as const;
export const SET_GRADE = "header/SET_GRADE" as const;
export const SET_GROUP = "header/SET_GROUP" as const;
export const SET_NUMBER = "header/SET_NUMBER" as const;
export const SET_NAME = "header/SET_NAME" as const;
export const SET_PHONE = "header/SET_PHONE" as const;
export const SET_PROFILE_URI = "header/SET_PROFILE_URI" as const;
export const SET_CLUB_UUID = "header/SET_CLUB_UUID" as const;

export const GET_STUDENT_INFO_SAGA = "header/GET_STUDENT_INFO_SAGA" as const;
export const GET_TEACHER_INFO_SAGA = "header/GET_TEACHER_INFO_SAGA" as const;

export const setInit = (
  user: ResStudentInfo | ResTeacherInfo,
  clubUuid: string
) => ({
  type: SET_INIT,
  payload: { user, clubUuid }
});
export const setGrade = (grade: number) => ({
  type: SET_GRADE,
  payload: { grade }
});
export const setGroup = (group: number) => ({
  type: SET_GROUP,
  payload: { group }
});
export const setNumber = (number: number) => ({
  type: SET_NUMBER,
  payload: { number }
});
export const setName = (name: string) => ({
  type: SET_NAME,
  payload: { name }
});
export const setPhone = (phone: string) => ({
  type: SET_PHONE,
  payload: { phone }
});
export const setProfileUri = (profileUri: string) => ({
  type: SET_PROFILE_URI,
  payload: { profileUri }
});
export const getStudentInfoSaga = (studentUuid: string) => ({
  type: GET_STUDENT_INFO_SAGA,
  payload: { studentUuid }
});
export const getTeacherInfoSaga = (teacherUuid: string) => ({
  type: GET_TEACHER_INFO_SAGA,
  payload: { teacherUuid }
});
export const setClubUuid = (clubUuid: string) => ({
  type: SET_CLUB_UUID,
  payload: { clubUuid }
});

export type HeaderAction = ReturnType<
  | typeof setGrade
  | typeof setGroup
  | typeof setName
  | typeof setNumber
  | typeof setPhone
  | typeof setProfileUri
  | typeof setInit
  | typeof getStudentInfoSaga
  | typeof getTeacherInfoSaga
  | typeof setClubUuid
>;
