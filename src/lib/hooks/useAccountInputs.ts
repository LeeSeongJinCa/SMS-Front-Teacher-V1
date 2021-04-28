import { ChangeEvent, useCallback, useState } from "react";

export type AccountInputs = ReturnType<typeof useAccountInputs>;

type ChangeInputType = ChangeEvent<HTMLInputElement>;

type ChangeSelectType = ChangeEvent<HTMLSelectElement>;

const useAccountInputs = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [grade, setGrade] = useState<number>(1);
  const [group, setGroup] = useState<number>(1);
  const [teacherId, setTeacherId] = useState<string>("");
  const [teacherPw, setTeacherPw] = useState<string>("");

  const changeName = useCallback((e: ChangeInputType) => {
    setName(e.target.value);
  }, []);

  const changePhone = useCallback((e: ChangeInputType) => {
    setPhoneNumber(e.target.value);
  }, []);

  const changeGrade = useCallback((e: ChangeSelectType) => {
    const value = +e.target.value;
    if (isNaN(+value)) return;
    setGrade(value);
  }, []);

  const changeGroup = useCallback((e: ChangeSelectType) => {
    const value = +e.target.value;
    if (isNaN(+value)) return;
    setGroup(value);
  }, []);

  const changeId = useCallback((e: ChangeInputType) => {
    setTeacherId(e.target.value);
  }, []);

  const changePw = useCallback((e: ChangeInputType) => {
    setTeacherPw(e.target.value);
  }, []);

  return {
    name,
    phoneNumber,
    grade,
    group,
    teacherId,
    teacherPw,
    changeName,
    changePhone,
    changeGrade,
    changeGroup,
    changeId,
    changePw
  };
};

export default useAccountInputs;
