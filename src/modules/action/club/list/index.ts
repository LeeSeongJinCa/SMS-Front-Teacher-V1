import { ClubListItem } from "../../../../lib/api/payloads/Club";

export const GET_CLUB_LIST = "club/GET_CLUB_LIST" as const;
export const GET_CLUB_LIST_SUCCESS = "club/GET_CLUB_LIST_SUCCESS" as const;
export const GET_CLUB_LIST_FAIL = "club/GET_CLUB_LIST_FAIL" as const;

export const getClubList = () => ({
  type: GET_CLUB_LIST
});
export const getClubListSuccess = (clubs: ClubListItem[]) => ({
  type: GET_CLUB_LIST_SUCCESS,
  payload: clubs
});
export const getClubListFail = () => ({
  type: GET_CLUB_LIST_FAIL
});

type ClubListActiion = ReturnType<
  typeof getClubListSuccess | typeof getClubListFail
>;

export default ClubListActiion;
