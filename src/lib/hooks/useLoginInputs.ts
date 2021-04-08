import { ChangeEvent, useCallback, useState } from "react";

const useLoginInputs = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const handleId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  }, []);

  const handlePw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  }, []);

  return [id, pw, handleId, handlePw] as const;
};

export default useLoginInputs;
