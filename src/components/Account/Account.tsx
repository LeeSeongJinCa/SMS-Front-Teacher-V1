import React, { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./style";

import { AccountInputs } from "../../lib/hooks/useAccountInputs";

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
    changeName,
    changePhone,
    changeGrade,
    changeGroup,
    changeId,
    changePw
  } = accountInputs;

  const toggleHomeroom = () => {
    setHomeroom(prev => !prev);
  };

  const handleApplyAccount = () => {
    applyAccount(accountInputs, homeroom);
  };

  useEffect(() => {
    toast.info(
      "PICK 계정이 존재하는 경우, 해당 계정으로 사용하실 수 있습니다."
    );
  }, []);

  return (
    <S.AccountWrap>
      <S.Title>SMS</S.Title>
      <AccountInput
        text="이름"
        attr={{ id: "name", value: name, onChange: changeName, maxLength: 4 }}
      />
      <AccountInput
        text="전화번호"
        attr={{
          id: "phoneNumber",
          value: phoneNumber,
          onChange: changePhone,
          maxLength: 11
        }}
      />
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
      <AccountSelect
        text="학년"
        attr={{
          name: "grade",
          id: "grade",
          value: grade,
          onChange: changeGrade,
          disabled: homeroom
        }}
        count={3}
      />
      <AccountSelect
        text="반"
        attr={{
          name: "group",
          id: "group",
          value: group,
          onChange: changeGroup,
          disabled: homeroom
        }}
        count={4}
      />
      <AccountInput
        text="아이디"
        attr={{
          id: "teacherId",
          value: teacherId,
          onChange: changeId,
          maxLength: 16
        }}
      />
      <AccountInput
        text="비밀번호"
        attr={{
          type: "password",
          id: "teacherPw",
          value: teacherPw,
          onChange: changePw,
          maxLength: 16
        }}
      />
      <S.ApplyButton onClick={handleApplyAccount}>계정 신청</S.ApplyButton>
    </S.AccountWrap>
  );
};

const AccountInput: FC<{
  text: string;
  attr: React.InputHTMLAttributes<HTMLInputElement>;
}> = ({ text, attr }) => {
  return (
    <div>
      <S.InputLabel>
        <label htmlFor={attr.id}>{text}</label>
      </S.InputLabel>
      <S.InputWrap>
        <input {...attr} />
      </S.InputWrap>
    </div>
  );
};

const AccountSelect: FC<{
  text: string;
  attr: React.SelectHTMLAttributes<HTMLSelectElement>;
  count: number;
}> = ({ text, attr, count }) => {
  return (
    <div>
      <S.InputLabel>
        <label htmlFor={attr.id}>{text}</label>
      </S.InputLabel>
      <S.InputWrap className={attr.disabled ? "disabled" : ""}>
        <S.Select {...attr}>
          {Array(count)
            .fill(0)
            .map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
        </S.Select>
      </S.InputWrap>
    </div>
  );
};

export default Account;
