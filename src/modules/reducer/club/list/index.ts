import { ClubListItem } from "../../../../lib/api/payloads/Club";
import ClubListActiion, {
  GET_CLUB_LIST_FAIL,
  GET_CLUB_LIST_SUCCESS
} from "../../../action/club/list";

interface ClubListReducerState {
  clubs: ClubListItem[];
}

const initialState: ClubListReducerState = {
  clubs: []
};

const clubListReducer = (
  state: ClubListReducerState = initialState,
  action: ClubListActiion
): ClubListReducerState => {
  switch (action.type) {
    case GET_CLUB_LIST_SUCCESS:
      return { clubs: action.payload };
    case GET_CLUB_LIST_FAIL:
      return state;
    default:
      return state;
  }
};

export default clubListReducer;
