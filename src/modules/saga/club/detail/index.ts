import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import * as clubApi from "../../../../lib/api/club";
import { ClubDetail } from "../../../../lib/api/payloads/Club";
import {
  getClubDetail,
  getClubDetailSuccess,
  GET_CLUB_DETAIL
} from "../../../action/club/detail";
import { finishLoading, startLoading } from "../../../action/loading";

function* getClubDetailSaga(action: ReturnType<typeof getClubDetail>) {
  yield put(startLoading(GET_CLUB_DETAIL));
  try {
    const res: AxiosResponse<ClubDetail> = yield call(
      clubApi.getClubDetail,
      action.payload
    );
    yield put(getClubDetailSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_CLUB_DETAIL));
}

function* clubDetailSaga() {
  yield takeEvery(GET_CLUB_DETAIL, getClubDetailSaga);
}

export default clubDetailSaga;
