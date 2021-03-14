import { useSelector } from "react-redux";

import { stateType } from "../../modules/reducer";

const useCustomSelector = () => {
  const selector: stateType = useSelector((state: stateType) => state);

  return { ...selector };
};

export default useCustomSelector;
