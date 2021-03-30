import { combineReducers } from "redux";
import pageReducer from "./page";
import subNavReducer from "./subNav/subNav";
import headerReducer from "./header";
import boardReducer from "./board";
import posterReducer from "./poster";
import outingCardReducer from "./OutingCard";
import mainReducer from "./main";
import noticeListReducer from "./notice/list";
import noticeDetailReducer from "./notice/detail";
import recruitmentListReducer from "./recruitment/list";
import recruitmentDetailReducer from "./recruitment/detail";
import clubListReducer from "./club/list";
import clubDetailReducer from "./club/detail";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  poster: posterReducer,
  outingCard: outingCardReducer,
  main: mainReducer,
  noticeList: noticeListReducer,
  noticeDetail: noticeDetailReducer,
  loading: loadingReducer,
  recruitmentList: recruitmentListReducer,
  recruitmentDetail: recruitmentDetailReducer,
  clubList: clubListReducer,
  clubDetail: clubDetailReducer
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
