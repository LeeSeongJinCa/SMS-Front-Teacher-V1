import React, { FC } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import * as S from "./style";
import MyPageInput from "./MyPageInput";

import useCustomSelector from "../../lib/hooks/useCustomSelector";
import { patchTeacher } from "../../lib/api/Account";
import { getAxiosError } from "../../lib/utils";
import useMyPage from "../../lib/hooks/useMyPage";

interface Props {}

const MyPage: FC<Props> = () => {
  const history = useHistory();
  const { grade, group, name, phone_number } = useCustomSelector().header;
  const [phone, onChangePhone] = useMyPage();

  const submitPhoneNum = async () => {
    if (phone.length !== 11 && isNaN(+phone)) {
      toast.error("전화번호를 알맞게 입력해주세요.");
      return;
    }

    if (phone === phone_number) {
      toast.error("전화번호를 변경해주세요.");
      return;
    }

    try {
      await patchTeacher(localStorage.getItem("uuid"), phone);

      toast.success("전화번호를 변경했습니다.");
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 403) {
        toast.error("본인 계정이 아닙니다. 다시 로그인해주세요.");
        history.push("/login");
      } else if (status === 409 && code === -801) {
        toast.error("현재 비밀번호가 올바르지 않습니다.");
      }
    }
  };

  return (
    <S.MyPageWrap>
      <h1>내 계정</h1>
      <div>
        <MyPageInput id="name" text="성함" value={name} />
        <MyPageInput id="grade" text="학년" value={grade} />
        <MyPageInput id="group" text="반" value={group} />
        <MyPageInput
          id="phone_number"
          text="전화번호"
          value={phone}
          onChange={onChangePhone}
        />
        <button onClick={submitPhoneNum}>계정 정보 변경</button>
      </div>
    </S.MyPageWrap>
  );
};

export default MyPage;
