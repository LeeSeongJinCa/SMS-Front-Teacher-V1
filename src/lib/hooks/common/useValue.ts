import { useCallback, useState } from "react";

const useValue = () => {
  const [value, setValue] = useState<string>("");

  const onChangeValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  return [value, onChangeValue] as const;
};

export default useValue;
