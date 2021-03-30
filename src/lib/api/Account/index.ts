import { apiDefault } from "../client";

import { ResTeacher, ResTeacherWithDefault } from "../payloads/Account";

export const postTeacher = (account: ResTeacher, homeroom: boolean) => {
  const { grade, group, name, phoneNumber, teacherId, teacherPw } = account;

  let accountForm: any = {
    name,
    phone_number: phoneNumber,
    teacher_id: teacherId,
    teacher_pw: teacherPw
  };

  if (!homeroom) {
    accountForm = { ...accountForm, grade, group };
  }

  return apiDefault().post<ResTeacherWithDefault>("/teachers", accountForm);
};
