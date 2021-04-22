import { useCallback, useState } from "react";

interface ErrorState {
  status: boolean;
  message: string;
}

const initErrorState: ErrorState = {
  status: false,
  message: ""
};

const useLoginErrorMessage = () => {
  const [errorMessage, setErrorMessage] = useState<ErrorState>(initErrorState);

  const errorMessageMacro = useCallback((message: string) => {
    setErrorMessage({
      status: true,
      message
    });
  }, []);

  return [errorMessage, errorMessageMacro] as const;
};

export default useLoginErrorMessage;
