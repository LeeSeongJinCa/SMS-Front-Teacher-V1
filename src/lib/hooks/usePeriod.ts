import { ChangeEvent, useCallback, useState } from "react";

import { EndStudents } from "./useEndStudents";

import { Period } from "../../components/Admin/Outing/statistics";

const usePeriod = () => {
  const [period, setPeriod] = useState<Period>(0);

  const handlePeriod = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setPeriod(+e.currentTarget.value as Period);
  }, []);

  const filterPeriod = useCallback(
    (student: EndStudents) => {
      const today = new Date();
      const y = today.getFullYear();
      const m = today.getMonth();
      const d = today.getDate();
      const periodTime = new Date(y, m, d - period).getTime();
      const targetTime = new Date(student.date).getTime();

      if (period === 0) return true;

      if (targetTime > periodTime) return true;
      return false;
    },
    [period]
  );

  return [period, handlePeriod, filterPeriod] as const;
};

export default usePeriod;
