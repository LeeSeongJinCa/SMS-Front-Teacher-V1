import { useSelector } from "react-redux";

import { stateType } from "../../modules/reducer";

const useCustomSelector = () => {
  const selector = useSelector((state: stateType) => state);

  return { ...selector };
};

export default useCustomSelector;
