import React, { FC, useState } from "react";

import * as S from "./style";

import { AccountInputs } from "./useAccountInputs";

import { ResTeacher } from "../../lib/api/payloads/Account";

interface Props {
  accountInputs: AccountInputs;
  applyAccount: (accountForm: ResTeacher, homeroom: boolean) => void;
}

const Account: FC<Props> = ({ accountInputs, applyAccount }) => {
  const [homeroom, setHomeroom] = useState<boolean>(true);
  const {
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
  } = accountInputs;

  const toggleHomeroom = () => {
    setHomeroom(prev => !prev);
  };

  const handleApplyAccount = () => {
    applyAccount(accountInputs, homeroom);
  };

  return (
    <S.AccountWrap>
      <S.Title>SMS</S.Title>
      <div>
        <S.InputLabel>
          <label htmlFor="grade">이름</label>
        </S.InputLabel>
        <S.InputWrap>
          <input
            type="text"
            id="grade"
            onChange={handleName}
            value={name}
            maxLength={4}
          />
        </S.InputWrap>
      </div>

      <div>
        <S.InputLabel>
          <label htmlFor="group">전화번호</label>
        </S.InputLabel>
        <S.InputWrap>
          <input
            type="text"
            id="group"
            onChange={handlePhoneNumber}
            value={phoneNumber}
            maxLength={11}
          />
        </S.InputWrap>
      </div>

      <div>
        <S.InputLabel>
          <label htmlFor="homeroom">담임 선생님</label>
        </S.InputLabel>
        <S.Checkbox
          type="checkbox"
          name="homeroom"
          id="homeroom"
          onChange={toggleHomeroom}
        />
      </div>

      <div>
        <S.InputLabel>
          <label htmlFor="name">학년</label>
        </S.InputLabel>
        <S.InputWrap className={homeroom ? "disabled" : ""}>
          <S.Select
            name="name"
            id="name"
            disabled={homeroom}
            onChange={handleGrade}
            value={grade}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </S.Select>
        </S.InputWrap>
      </div>

      <div>
        <S.InputLabel>
          <label htmlFor="phoneNumber">반</label>
        </S.InputLabel>
        <S.InputWrap className={homeroom ? "disabled" : ""}>
          <S.Select
            name="phoneNumber"
            id="phoneNumber"
            disabled={homeroom}
            onChange={handleGroup}
            value={group}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </S.Select>
        </S.InputWrap>
      </div>

      <div>
        <S.InputLabel>
          <label htmlFor="teacherId">아이디</label>
        </S.InputLabel>
        <S.InputWrap>
          <input
            type="text"
            id="teacherId"
            onChange={handleTeacherId}
            value={teacherId}
            maxLength={16}
          />
        </S.InputWrap>
      </div>

      <div>
        <S.InputLabel>
          <label htmlFor="teacherPw">비밀번호</label>
        </S.InputLabel>
        <S.InputWrap>
          <input
            type="password"
            id="teacherPw"
            onChange={handleTeacherPw}
            value={teacherPw}
            maxLength={16}
          />
        </S.InputWrap>
      </div>

      <S.ApplyButton onClick={handleApplyAccount}>계정 신청</S.ApplyButton>
    </S.AccountWrap>
  );
};

export default Account;
