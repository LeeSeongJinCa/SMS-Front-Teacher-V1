import React, {
  FC,
  FocusEvent,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState
} from "react";

import * as S from "./style";

interface Props {
  text: string;
  inputOption?: InputHTMLAttributes<HTMLInputElement>;
}

const MyPageInput: FC<Props> = ({ text, inputOption }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (value === "") {
      e.currentTarget.classList.remove("focused");
      setMessage("");
      setError(false);
    } else if (value.includes(" ")) {
      setMessage("공백을 넣을 수 없습니다.");
      setError(true);
    } else {
      setMessage("");
      setError(false);
    }
  }, []);

  const onFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.classList.add("focused");
  }, []);

  const onClickFocus = useCallback(() => {
    inputRef.current.focus();
  }, []);

  return (
    <S.InputWrap>
      <S.Input
        type="text"
        ref={inputRef}
        {...inputOption}
        onFocus={onFocus}
        onBlur={handleBlur}
        disabled={text !== "전화번호"}
      />
      <S.ErrorMessage>{message}</S.ErrorMessage>
      <S.Text onClick={onClickFocus}>{text}</S.Text>
      <S.InputDefaultLine />
      <S.InputLine id="line" bgColor={error ? "#ff5555" : "#038fff"} />
    </S.InputWrap>
  );
};

export default MyPageInput;
