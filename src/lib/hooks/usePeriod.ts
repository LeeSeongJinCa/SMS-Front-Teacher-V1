import { ChangeEvent, useCallback, useState } from "react";

import { Period } from "../../components/Admin/Outing/statistics";

const usePeriod = () => {
  const [period, setPeriod] = useState<Period>(0);

  const handlePeriod = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setPeriod(+e.currentTarget.value as Period);
  }, []);

  return [period, handlePeriod] as const;
};

export default usePeriod;
