import { ChangeEvent, useCallback, useEffect, useState } from "react";

import useCustomSelector from "../../lib/hooks/useCustomSelector";

interface Props {}

const useMyPage = () => {
  const { phone_number } = useCustomSelector().header;
  const [phone, setPhone] = useState<string>(phone_number);

  const onChangePhone = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
  }, []);

  useEffect(() => {
    setPhone(phone_number);
  }, [phone_number]);

  return [phone, onChangePhone] as const;
};

export default useMyPage;
