import { ChangeEvent, useCallback, useState } from "react";

export type AccountInputs = ReturnType<typeof useAccountInputs>;

const useAccountInputs = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [grade, setGrade] = useState<number>(1);
  const [group, setGroup] = useState<number>(1);
  const [teacherId, setTeacherId] = useState<string>("");
  const [teacherPw, setTeacherPw] = useState<string>("");

  const handleName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handlePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  }, []);

  const handleGrade = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setGrade(+e.target.value);
  }, []);

  const handleGroup = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setGroup(+e.target.value);
  }, []);

  const handleTeacherId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTeacherId(e.target.value);
  }, []);

  const handleTeacherPw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTeacherPw(e.target.value);
  }, []);

  return {
    name,
    phoneNumber,
    grade,
    group,
    teacherId,
    teacherPw,
    handleName,
    handlePhoneNumber,
    handleGrade,
    handleGroup,
    handleTeacherId,
    handleTeacherPw
  };
};

export default useAccountInputs;
