import { AxiosResponse } from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import { ResBoardList } from "../../../../lib/api/payloads/Board";
import { finishLoading, startLoading } from "../../../action/loading";
import {
  GET_NOTICE_LIST,
  GET_NOTICE_SCHOOL_LIST,
  getNoticeSchoolList,
  getNoticeListSuccess,
  GET_NOTICE_CLUB_LIST,
  GET_NOTICE_WRITER_LIST,
  getNoticeWriterList
} from "../../../action/notice/list";
import * as noticeApi from "../../../../lib/api/notice";

function* getNoticeSchoolListSaga(
  action: ReturnType<typeof getNoticeSchoolList>
) {
  yield put(startLoading(GET_NOTICE_LIST));
  try {
    const res: AxiosResponse<ResBoardList> = yield call(
      noticeApi.getNoticeList,
      "school",
      action.payload
    );
    yield put(getNoticeListSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_LIST));
}

function* getNoticeClubListSaga(
  action: ReturnType<typeof getNoticeSchoolList>
) {
  yield put(startLoading(GET_NOTICE_LIST));
  try {
    const res: AxiosResponse<ResBoardList> = yield call(
      noticeApi.getNoticeList,
      "club",
      action.payload
    );
    yield put(getNoticeListSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_LIST));
}

function* getNoticeWriterListSaga(
  action: ReturnType<typeof getNoticeWriterList>
) {
  yield put(startLoading(GET_NOTICE_LIST));
  try {
    const { page, uuid } = action.payload;
    const res: AxiosResponse<ResBoardList> = yield call(
      noticeApi.getNoticeWriterList,
      uuid,
      page
    );
    yield put(getNoticeListSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_LIST));
}

function* noticeListSaga() {
  yield takeEvery(GET_NOTICE_SCHOOL_LIST, getNoticeSchoolListSaga);
  yield takeEvery(GET_NOTICE_CLUB_LIST, getNoticeClubListSaga);
  yield takeEvery(GET_NOTICE_WRITER_LIST, getNoticeWriterListSaga);
}

export default noticeListSaga;
