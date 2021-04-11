import { ResDefault } from "../";

export const UNABLE_FORM = "아이디 및 비밀번호는 4자 이상 16자 이하여야 합니다." as const;
export const PASSWORD_NOT_MATCHED = "아이디와 올바르지 않은 계정의 비밀번호입니다." as const;
export const NEED_ADMIN_ACCEPT = "관리자에 인증 후 사용 가능합니다. 해당 상태가 지속된다면 담당 선생님께 문의해주세요." as const;
export const CAN_NOT_FOUND_ACCOUNT = "올바르지 않은 정보의 계정입니다." as const;

export interface ResStudentLogin {
  access_token: string;
  student_uuid: string;
}

export interface ResTeacherLogin {
  teacher_uuid: string;
  access_token: string;
}

export interface ResStudentInfo {
  grade: number;
  group: number;
  student_number: number;
  name: string;
  phone_number: string;
  profile_uri: string;
}

export interface ResTeacherInfo {
  grade: number;
  group: number;
  name: string;
  phone_number: string;
}

export interface ResStudentLoginWithDefault
  extends ResStudentLogin,
    ResDefault {}
export interface ResTeacherLoginWithDefault
  extends ResTeacherLogin,
    ResDefault {}
export interface ResStudentInfoWithDefault extends ResStudentInfo, ResDefault {}
export interface ResTeacherInfoWithDefault extends ResTeacherInfo, ResDefault {}
