import { ResDefault } from "../index";

export interface ResTeacher {
  teacherId: string;
  teacherPw: string;
  grade?: number;
  group?: number;
  name: string;
  phoneNumber: string;
}

export interface ResTeacherWithDefault extends ResDefault, ResTeacher {}
