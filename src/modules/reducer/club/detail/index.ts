import { ClubDetail } from "../../../../lib/api/payloads/Club";
import ClubDetailAction, {
  GET_CLUB_DETAIL_FAIL,
  GET_CLUB_DETAIL_SUCCESS
} from "../../../action/club/detail";

interface ClubDetailReducerState extends ClubDetail {}

const initialState: ClubDetailReducerState = {
  club_concept: "",
  field: "",
  floor: 0,
  introduction: "",
  leader_uuid: "",
  link: "",
  location: "",
  logo_uri: "",
  member_uuids: [],
  name: ""
};

const clubDetailReducer = (
  state: ClubDetailReducerState = initialState,
  action: ClubDetailAction
): ClubDetailReducerState => {
  switch (action.type) {
    case GET_CLUB_DETAIL_SUCCESS:
      return action.payload;
    case GET_CLUB_DETAIL_FAIL:
      return state;
    default:
      return state;
  }
};

export default clubDetailReducer;
