import React, { FC, FocusEvent, useRef, useState } from "react";

import * as S from "./style";

import { Eye, EyeOff } from "../../assets";

interface Props {
  id: string;
  text: string;
  changeHandler: (id: string, value: string) => void;
  handleChangePassword?: () => void;
}

const PasswordInput: FC<Props> = ({
  id,
  text,
  changeHandler,
  handleChangePassword
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [eyeOn, setEyeOn] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (value === "") {
      e.currentTarget.classList.remove("focused");
      setMessage("");
      setError(false);
    } else if (value.includes(" ")) {
      setMessage("비밀번호에는 공백을 넣을 수 없습니다.");
      setError(true);
    } else if (value.length < 4 || value.length > 16) {
      setMessage("비밀번호는 4자 이상 16자 이하여야 합니다.");
      setError(true);
    } else {
      setMessage("");
      setError(false);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.classList.add("focused");
  };

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  const toggleEye = () => {
    setEyeOn(prev => !prev);
  };

  return (
    <S.PasswordInputWrap>
      <S.Input
        type={eyeOn ? "text" : "password"}
        id={id}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={e => changeHandler(id, e.currentTarget.value)}
        onKeyPress={e => {
          if (id === "revisionPwConfirm" && e.key === "Enter") {
            handleChangePassword();
          }
        }}
      />
      <S.ErrorMessage>{message}</S.ErrorMessage>
      {eyeOn ? (
        <S.Eye
          src={Eye}
          alt="see password"
          title="see password"
          onClick={toggleEye}
        />
      ) : (
        <S.Eye
          src={EyeOff}
          alt="Don't see password"
          title="Don't see password"
          onClick={toggleEye}
        />
      )}
      <S.Text id="text" onClick={handleInputFocus}>
        {text}
      </S.Text>
      <S.InputDefaultLine />
      <S.InputLine id="line" bgColor={error ? "#ff5555" : "#038fff"} />
    </S.PasswordInputWrap>
  );
};

export default PasswordInput;
