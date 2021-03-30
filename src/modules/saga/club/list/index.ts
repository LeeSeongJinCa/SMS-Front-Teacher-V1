import { call, put, takeEvery } from "redux-saga/effects";
import {
  getClubList,
  getClubListSuccess,
  GET_CLUB_LIST
} from "../../../action/club/list";
import { finishLoading, startLoading } from "../../../action/loading";
import * as api from "../../../../lib/api/club";
import { AxiosResponse } from "axios";
import { ClubListItem } from "../../../../lib/api/payloads/Club";

function* getClubListSaga(action: ReturnType<typeof getClubList>) {
  yield put(startLoading(GET_CLUB_LIST));
  try {
    const res: AxiosResponse<{ clubs: ClubListItem[] }> = yield call(
      api.getClubList
    );

    yield put(getClubListSuccess(res.data.clubs));
  } catch (err) {}
  yield put(finishLoading(GET_CLUB_LIST));
}

function* clubListSaga() {
  yield takeEvery(GET_CLUB_LIST, getClubListSaga);
}

export default clubListSaga;
