import { ClubDetail } from "../../../../lib/api/payloads/Club";

export const GET_CLUB_DETAIL = "club/GET_CLUB_DETAIL" as const;
export const GET_CLUB_DETAIL_SUCCESS = "club/GET_CLUB_DETAIL_SUCCESS" as const;
export const GET_CLUB_DETAIL_FAIL = "club/GET_CLUB_DETAIL_FAIL" as const;

export const getClubDetail = (uuid: string) => ({
  type: GET_CLUB_DETAIL,
  payload: uuid
});
export const getClubDetailSuccess = (payload: ClubDetail) => ({
  type: GET_CLUB_DETAIL_SUCCESS,
  payload
});
export const getClubDetailFail = () => ({
  type: GET_CLUB_DETAIL_FAIL
});

type ClubDetailAction = ReturnType<
  typeof getClubDetailSuccess | typeof getClubDetailFail
>;

export default ClubDetailAction;
