import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  useCallback,
  useRef,
  useState
} from "react";

import * as S from "./style";

interface Props {
  id: string;
  text: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyPageInput: FC<Props> = ({ id, text, value, onChange }) => {
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
      {onChange ? (
        <S.Input
          type="text"
          id={id}
          ref={inputRef}
          value={value}
          onFocus={onFocus}
          onBlur={handleBlur}
          onChange={onChange}
        />
      ) : (
        <S.Input
          type="text"
          id={id}
          ref={inputRef}
          defaultValue={value}
          onFocus={onFocus}
          onBlur={handleBlur}
          disabled={true}
        />
      )}
      <S.ErrorMessage>{message}</S.ErrorMessage>
      <S.Text id="text" onClick={onClickFocus}>
        {text}
      </S.Text>
      <S.InputDefaultLine />
      <S.InputLine id="line" bgColor={error ? "#ff5555" : "#038fff"} />
    </S.InputWrap>
  );
};

export default MyPageInput;
