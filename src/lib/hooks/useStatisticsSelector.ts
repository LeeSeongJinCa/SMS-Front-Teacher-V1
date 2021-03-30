import { useCallback } from "react";

import { EndStudents } from "./useEndStudents";
import useGradeSelector from "./useGradeSelector";
import useGroupSelector from "./useGroupSelector";

const useStatisticsSelector = () => {
  const [gradeState, gradeHandler] = useGradeSelector();
  const [groupState, groupHandler] = useGroupSelector();

  const filterSelector = useCallback(
    (student: [string, EndStudents[]]) => {
      const sNumber = student[0];
      const grade = sNumber[0];
      const group = sNumber[1];

      if (!gradeState["grade-1"] && grade === "1") return false;
      if (!gradeState["grade-2"] && grade === "2") return false;
      if (!gradeState["grade-3"] && grade === "3") return false;

      if (!groupState["group-1"] && group === "1") return false;
      if (!groupState["group-2"] && group === "2") return false;
      if (!groupState["group-3"] && group === "3") return false;
      if (!groupState["group-4"] && group === "4") return false;

      return true;
    },
    [gradeState, groupState]
  );

  return [
    gradeState,
    groupState,
    gradeHandler,
    groupHandler,
    filterSelector
  ] as const;
};

export default useStatisticsSelector;
