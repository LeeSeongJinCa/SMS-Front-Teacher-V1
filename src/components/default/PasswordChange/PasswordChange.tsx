import React, { FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import * as S from "./style";
import PasswordInput from "./PasswordInput";

import { stateType } from "../../../modules/reducer";
import { Loading } from "../";

interface Props {
  loading: boolean;
  changePassword: (currentPw: string, revisionPw: string) => Promise<void>;
}

interface Passwords {
  currentPw: string;
  revisionPw: string;
  revisionPwConfirm: string;
}

const PasswordChange: FC<Props> = ({ loading, changePassword }) => {
  const [pws, setPws] = useState<Passwords>({
    currentPw: "",
    revisionPw: "",
    revisionPwConfirm: ""
  });

  const changeHandler = useCallback((id: string, value: string) => {
    setPws(prev => ({
      ...prev,
      [id]: value
    }));
  }, []);

  const handleChangePassword = useCallback(() => {
    if (
      pws.currentPw.trim() === "" ||
      pws.revisionPw.trim() === "" ||
      pws.revisionPwConfirm.trim() === ""
    ) {
      toast.error("모든 칸에 입력을 완료해주세요.");
      return;
    }
    if (pws.revisionPw !== pws.revisionPwConfirm) {
      toast.error("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    changePassword(pws.currentPw, pws.revisionPw);
  }, [pws]);

  return (
    <S.PasswordChangeWrap>
      <div>
        <S.Title>비밀번호</S.Title>
        <S.InputWrap>
          <PasswordInput
            id="currentPw"
            text="현재 비밀번호"
            changeHandler={changeHandler}
          />
          <PasswordInput
            id="revisionPw"
            text="새 비밀번호"
            changeHandler={changeHandler}
          />
          <S.WarningMessage>
            비밀번호 안전성: 4자 이상 16자 이하 입력하세요. 다른 사이트에서 쓰는
            비밀번호나 애완동물의 이름처럼 추측하기 쉬운 이름은 사용하지 마세요.
          </S.WarningMessage>
          <PasswordInput
            id="revisionPwConfirm"
            text="새 비밀번호 확인"
            changeHandler={changeHandler}
            handleChangePassword={handleChangePassword}
          />
          <S.ChangeButtonWrap>
            <S.ChangeButton onClick={handleChangePassword}>
              비밀번호 변경
            </S.ChangeButton>
            {loading && <Loading />}
          </S.ChangeButtonWrap>
        </S.InputWrap>
      </div>
    </S.PasswordChangeWrap>
  );
};

export default PasswordChange;
