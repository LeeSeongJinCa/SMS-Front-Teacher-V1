import { all } from "redux-saga/effects";

import posterSaga from "./poster";
import mainSaga from "./main";
import headerSaga from "./header";
import outingCardSaga from "./outingCard";
import writeSaga from "./write";
import noticeListSaga from "./notice/list";
import noticeDetailSaga from "./notice/detail";
import recruitmentListSaga from "./recruitment/list";
import recruitmentDetailSaga from "./recruitment/detail";
import clubListSaga from "./club/list";
import clubDetailSaga from "./club/detail";

function* rootSaga() {
  yield all([
    posterSaga(),
    mainSaga(),
    headerSaga(),
    outingCardSaga(),
    writeSaga(),
    noticeListSaga(),
    noticeDetailSaga(),
    recruitmentListSaga(),
    recruitmentDetailSaga(),
    clubListSaga(),
    clubDetailSaga()
  ]);
}

export default rootSaga;
