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
  getNoticeWriterList,
  searchNoticeSchoolList,
  SEARCH_NOTICE_CLUB_LIST_SEARCH,
  SEARCH_NOTICE_SCHOOL_LIST_SEARCH
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

function* searchNoticeSchoolListSaga(
  action: ReturnType<typeof searchNoticeSchoolList>
) {
  yield put(startLoading(GET_NOTICE_LIST));
  try {
    const res: AxiosResponse<ResBoardList> = yield call(
      noticeApi.searchSchoolNotice,
      action.payload
    );
    yield put(getNoticeListSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_LIST));
}

function* searchNoticeClubListSaga(
  action: ReturnType<typeof searchNoticeSchoolList>
) {
  yield put(startLoading(GET_NOTICE_LIST));
  try {
    const res: AxiosResponse<ResBoardList> = yield call(
      noticeApi.searchClubNotice,
      action.payload
    );
    yield put(getNoticeListSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_LIST));
}

function* noticeListSaga() {
  yield takeEvery(GET_NOTICE_SCHOOL_LIST, getNoticeSchoolListSaga);
  yield takeEvery(GET_NOTICE_CLUB_LIST, getNoticeClubListSaga);
  yield takeEvery(GET_NOTICE_WRITER_LIST, getNoticeWriterListSaga);
  yield takeEvery(SEARCH_NOTICE_SCHOOL_LIST_SEARCH, searchNoticeSchoolListSaga);
  yield takeEvery(SEARCH_NOTICE_CLUB_LIST_SEARCH, searchNoticeClubListSaga);
}

export default noticeListSaga;
