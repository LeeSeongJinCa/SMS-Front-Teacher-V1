import { RecruitmentDetail } from "../../../../lib/api/payloads/Recruitment";

export const GET_RECRUITMENT_DETAIL = "GET_RECRUITMENT_DETAIL" as const;
export const GET_RECRUITMENT_DETAIL_SUCCESS = "GET_RECRUITMENT_DETAIL_SUCCESS" as const;
export const GET_RECRUITMENT_DETAIL_FAIL = "GET_RECRUITMENT_DETAIL_FAIL" as const;
export const GET_RECRUITMENT_DETAIL_PAGE = "GET_RECRUITMENT_DETAIL_PAGE" as const;

export const getRecruitMentDetail = (uuid: string) => ({
  type: GET_RECRUITMENT_DETAIL,
  payload: uuid
});
export const getRecruitMentDetailSuccess = (payload: RecruitmentDetail) => ({
  type: GET_RECRUITMENT_DETAIL_SUCCESS,
  payload
});
export const getRecruitMentDetailFail = () => ({
  type: GET_RECRUITMENT_DETAIL_FAIL
});
export const getRecruitMentDetailPage = (uuid: string) => ({
  type: GET_RECRUITMENT_DETAIL_PAGE,
  payload: uuid
});

type RecruitmentDetailAction = ReturnType<
  | typeof getRecruitMentDetail
  | typeof getRecruitMentDetailSuccess
  | typeof getRecruitMentDetailFail
>;

export default RecruitmentDetailAction;
