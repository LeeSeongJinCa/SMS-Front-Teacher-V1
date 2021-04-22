import { ChangeEvent, useCallback, useState } from "react";

type InputElements = HTMLInputElement | HTMLTextAreaElement;

const useInput = () => {
  const [input, setInput] = useState<string>("");

  const onChangeInput = useCallback((e: ChangeEvent<InputElements>) => {
    setInput(e.currentTarget.value);
  }, []);

  return [input, onChangeInput] as const;
};

export default useInput;
