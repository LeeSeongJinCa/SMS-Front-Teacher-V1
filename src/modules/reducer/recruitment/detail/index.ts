import { RecruitmentDetail } from "../../../../lib/api/payloads/Recruitment";
import RecruitmentDetailAction, {
  GET_RECRUITMENT_DETAIL_FAIL,
  GET_RECRUITMENT_DETAIL_SUCCESS
} from "../../../action/recruitment/detail";

interface RecruitmentDetailReducerState extends RecruitmentDetail {}

const initialState: RecruitmentDetailReducerState = {
  club_uuid: "",
  end_period: "",
  recruit_concept: "",
  recruitment_uuid: "",
  start_period: "",
  recruit_members: []
};

const recruitmentDetailReducer = (
  state: RecruitmentDetailReducerState = initialState,
  action: RecruitmentDetailAction
): RecruitmentDetailReducerState => {
  switch (action.type) {
    case GET_RECRUITMENT_DETAIL_SUCCESS:
      return action.payload;
    case GET_RECRUITMENT_DETAIL_FAIL:
      return state;
    default:
      return state;
  }
};

export default recruitmentDetailReducer;
