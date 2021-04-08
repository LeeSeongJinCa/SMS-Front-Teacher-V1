import { useCallback, useState } from "react";

const useLoginToggle = () => {
  const [showPw, setShowPw] = useState<boolean>(false);
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const toggleEye = useCallback(() => {
    setShowPw(prev => !prev);
  }, []);

  const toggleAutoLogin = useCallback(() => {
    setAutoLogin(prev => !prev);
  }, [autoLogin]);

  return [showPw, autoLogin, toggleEye, toggleAutoLogin] as const;
};

export default useLoginToggle;
