import { RecruitmentListItem } from "../../../../lib/api/payloads/Recruitment";

export const GET_RECRUITMENT_LIST = "recruitment/GET_RECRUITMENT_LIST" as const;
export const GET_RECRUITMENT_LIST_SUCCESS = "recruitment/GET_RECRUITMENT_LIST_SUCCESS" as const;
export const GET_RECRUITMENT_LIST_FAIL = "recruitment/GET_RECRUITMENT_LIST_FAIL" as const;

export const getRecruitMentList = () => ({
  type: GET_RECRUITMENT_LIST
});

export const getRecruitMentListSuccess = (
  recruitments: RecruitmentListItem[]
) => ({
  type: GET_RECRUITMENT_LIST_SUCCESS,
  payload: recruitments
});

export const getRecruitMentListFail = () => ({
  type: GET_RECRUITMENT_LIST_FAIL
});

type RecruitmentListAction = ReturnType<
  typeof getRecruitMentListSuccess | typeof getRecruitMentListFail
>;

export default RecruitmentListAction;
