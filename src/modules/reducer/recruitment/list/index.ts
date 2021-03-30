import { RecruitmentListItem } from "../../../../lib/api/payloads/Recruitment";
import RecruitmentListAction, {
  GET_RECRUITMENT_LIST_FAIL,
  GET_RECRUITMENT_LIST_SUCCESS
} from "../../../action/recruitment/list";

interface RecruitmentListReducerState {
  recruitments: RecruitmentListItem[];
}

const initialState: RecruitmentListReducerState = {
  recruitments: []
};

const recruitmentListReducer = (
  state: RecruitmentListReducerState = initialState,
  action: RecruitmentListAction
): RecruitmentListReducerState => {
  switch (action.type) {
    case GET_RECRUITMENT_LIST_SUCCESS:
      return { recruitments: action.payload };
    case GET_RECRUITMENT_LIST_FAIL:
      return state;
    default:
      return state;
  }
};

export default recruitmentListReducer;
