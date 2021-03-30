import { call, getContext, put, takeEvery } from "redux-saga/effects";
import { finishLoading, startLoading } from "../../../action/loading";
import * as noticeApi from "../../../../lib/api/notice";
import {
  deleteNotice,
  writeNotice,
  DELETE_NOTICE,
  editNotice,
  EDIT_NOTICE,
  getNoticeDetail,
  getNoticeDetailSuccess,
  GET_NOTICE_DETAIL,
  WRITE_NOTICE
} from "../../../action/notice/detail";
import { AxiosResponse } from "axios";
import { ResBoardDetail } from "../../../../lib/api/payloads/Board";
import { toast } from "react-toastify";
import { getSuccessHistory } from "../../../../lib/utils";

function* getNoticeDetailSaga(action: ReturnType<typeof getNoticeDetail>) {
  yield put(startLoading(GET_NOTICE_DETAIL));
  try {
    const res: AxiosResponse<ResBoardDetail> = yield call(
      noticeApi.getNoticeDetail,
      action.payload
    );
    yield put(getNoticeDetailSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_NOTICE_DETAIL));
}

function* editNoticeSaga(action: ReturnType<typeof editNotice>) {
  try {
    const history = yield getContext("history");
    yield call(noticeApi.editNotice, action.payload);
    toast.success("공지를 수정했습니다");
    const successUrl = getSuccessHistory(action.payload.type);
    history.push(successUrl);
  } catch (err) {}
}

function* deleteNoticeSaga(action: ReturnType<typeof deleteNotice>) {
  try {
    const history = yield getContext("history");
    const { uuid, type } = action.payload;
    yield call(noticeApi.deleteNotice, uuid);
    toast.success("공지를 삭제했습니다");
    const successUrl = getSuccessHistory(type);
    history.push(successUrl);
  } catch (err) {}
}

function* writeNoticeSaga(action: ReturnType<typeof writeNotice>) {
  const history = yield getContext("history");

  try {
    yield call(noticeApi.writeNotice, action.payload);
    toast.success("공지를 작성했습니다");
    const successUrl = getSuccessHistory(action.payload.type);
    history.push(successUrl);
  } catch (err) {}
}

function* noticeDetailSaga() {
  yield takeEvery(GET_NOTICE_DETAIL, getNoticeDetailSaga);
  yield takeEvery(EDIT_NOTICE, editNoticeSaga);
  yield takeEvery(DELETE_NOTICE, deleteNoticeSaga);
  yield takeEvery(WRITE_NOTICE, writeNoticeSaga);
}

export default noticeDetailSaga;
