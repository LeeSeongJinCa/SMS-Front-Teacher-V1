import { all } from "redux-saga/effects";

import mainSaga from "./main";
import headerSaga from "./header";
import outingCardSaga from "./outingCard";
import writeSaga from "./write";
import noticeListSaga from "./notice/list";
import noticeDetailSaga from "./notice/detail";

function* rootSaga() {
  yield all([
    mainSaga(),
    headerSaga(),
    outingCardSaga(),
    writeSaga(),
    noticeListSaga(),
    noticeDetailSaga()
  ]);
}

export default rootSaga;
