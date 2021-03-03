import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { Account } from "../../components";
import { postTeacher } from "../../lib/api/Account";
import { ResTeacher } from "../../lib/api/payloads/Account";
import { getAxiosError } from "../../lib/utils";

interface Props {}

const AccountContainer: FC<Props> = () => {
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

  const applyAccount = async (accountForm: ResTeacher, homeroom: boolean) => {
    try {
      await postTeacher(accountForm, homeroom);

      toast.success(
        "선생님 계정 신청이 완료되었습니다. 관리자 승인 후 사용하실 수 있습니다."
      );
    } catch (err) {
      const { code, status } = getAxiosError(err);

      if (status === 409) {
        if (code === -201) {
          toast.error(
            "이미 사용중인 아이디입니다. 다른 아이디를 사용해주세요."
          );
        } else if (code === -202) {
          toast.error(
            "이미 등록된 전화번호입니다. 본인 전화번호라면 담당 선생님께 문의해주세요."
          );
        } else if (code === -203) {
          toast.error(
            "해당 학반으로 신청된 계정이 있습니다. 담임 선생님이시라면 담당 선생님께 문의해주세요."
          );
        }
      }
    }
  };

  return (
    <Account
      accountForm={{
        name,
        phoneNumber,
        grade,
        group,
        teacherId,
        teacherPw
      }}
      handleName={handleName}
      handlePhoneNumber={handlePhoneNumber}
      handleGrade={handleGrade}
      handleGroup={handleGroup}
      handleTeacherId={handleTeacherId}
      handleTeacherPw={handleTeacherPw}
      applyAccount={applyAccount}
    />
  );
};

export default AccountContainer;
