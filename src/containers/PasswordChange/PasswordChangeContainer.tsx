import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { PasswordChange } from "../../components";
import {
  putStudentPassword,
  putTeacherPassword
} from "../../lib/api/PasswordChange";
import { getAxiosError } from "../../lib/utils";
import { STUDENT, TEACHER, UserType } from "../../modules/action/header";
import WithLoadingContainer, {
  LoadingProps
} from "../Loading/WithLoadingContainer";

interface Props extends LoadingProps {}

const PasswordChangeContainer: FC<Props> = ({
  loading,
  startLoading,
  endLoading
}) => {
  const history = useHistory();

  const changePassword = useCallback(
    async (type: UserType, currentPw: string, revisionPw: string) => {
      const uuid = localStorage.getItem(`uuid`);

      startLoading();
      try {
        if (type === STUDENT) {
          await putStudentPassword(uuid, currentPw, revisionPw);
        } else if (type === TEACHER) {
          await putTeacherPassword(uuid, currentPw, revisionPw);
        }

        toast.success("비밀번호를 변경했습니다.");
        history.push("/");
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 409 && code === -701) {
          toast.error("현재 비밀번호가 올바르지 않습니다.");
        }
      }
      endLoading();
    },
    []
  );

  return <PasswordChange loading={loading} changePassword={changePassword} />;
};

export default WithLoadingContainer(PasswordChangeContainer);
