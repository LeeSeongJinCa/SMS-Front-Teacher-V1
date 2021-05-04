import { combineReducers } from "redux";

import pageReducer from "./page";
import subNavReducer from "./subNav/subNav";
import headerReducer from "./header";
import boardReducer from "./board";
import outingCardReducer from "./OutingCard";
import mainReducer from "./main";
import noticeListReducer from "./notice/list";
import noticeDetailReducer from "./notice/detail";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  outingCard: outingCardReducer,
  main: mainReducer,
  noticeList: noticeListReducer,
  noticeDetail: noticeDetailReducer,
  loading: loadingReducer
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
