import { useCallback, useState } from "react";

const useBool = (defaultValue: boolean = false) => {
  const [bool, setBool] = useState<boolean>(defaultValue);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  return [bool, setTrue, setFalse] as const;
};

export default useBool;
