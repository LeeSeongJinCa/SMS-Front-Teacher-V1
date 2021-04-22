import useToggle from "./common/useToggle";

const useLoginToggle = () => {
  const [showPw, toggleEye] = useToggle();

  return [showPw, toggleEye] as const;
};

export default useLoginToggle;
