import React, { FC } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { Account } from "../../components";
import useAccountInputs from "../../components/Account/useAccountInputs";
import { postTeacher } from "../../lib/api/Account";
import { ResTeacher } from "../../lib/api/payloads/Account";
import { getAxiosError } from "../../lib/utils";

interface Props {}

const AccountContainer: FC<Props> = () => {
  const history = useHistory();
  const accountInputs = useAccountInputs();
  const { name, phoneNumber, teacherId, teacherPw } = accountInputs;

  const checkValidation = () => {
    const phoneNumberRegExp = /^\d{3}\d{4}\d{4}$/;

    if (name.length < 2 || name.length > 4) {
      toast.error("이름은 2자 이상 4자 이하 한글로 입력해주세요.");
      return false;
    }
    if (
      phoneNumber.length !== 11 ||
      isNaN(+phoneNumber) ||
      !phoneNumberRegExp.test(phoneNumber)
    ) {
      toast.error("전화번호를 정확하게 입력해주세요.");
      return false;
    }
    if (teacherId.length < 4 || teacherId.length > 16) {
      toast.error("아이디는 4자 이상 16자 이하로 입력해주세요.");
      return false;
    }
    if (teacherPw.length < 4 || teacherPw.length > 16) {
      toast.error("비밀번호는 4자 이상 16자 이하로 입력해주세요");
      return false;
    }

    return true;
  };

  const applyAccount = async (accountForm: ResTeacher, homeroom: boolean) => {
    if (!checkValidation()) return;

    try {
      await postTeacher(accountForm, homeroom);
      toast.success(
        "선생님 계정 신청이 완료되었습니다. 관리자 승인 후 사용하실 수 있습니다."
      );
      history.push("/login");
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

  return <Account accountInputs={accountInputs} applyAccount={applyAccount} />;
};

export default AccountContainer;
