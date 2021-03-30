import useGradeSelector from "./useGradeSelector";
import useGroupSelector from "./useGroupSelector";

const useStatisticsSelector = () => {
  const [gradeState, gradeHandler] = useGradeSelector();
  const [groupState, groupHandler] = useGroupSelector();

  return [gradeState, groupState, gradeHandler, groupHandler] as const;
};

export default useStatisticsSelector;
