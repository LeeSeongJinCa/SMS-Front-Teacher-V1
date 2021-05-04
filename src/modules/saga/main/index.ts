import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import { apiDefault } from "../../../lib/api/client";
import { ResScheduleWithDefault } from "../../../lib/api/payloads/Main";
import { getAxiosError } from "../../../lib/utils";
import {
  getSchedulesSaga,
  setSchedules,
  GET_SCHEDULES_SAGA,
  startScheduleLoading,
  endScheduleLoading
} from "../../action/main";

function* fetchSchedules(action: ReturnType<typeof getSchedulesSaga>) {
  const { year, month } = action.payload;
  const scheduleUrl = `schedules/years/${year}/months/${month}`;

  yield put(startScheduleLoading());
  try {
    const {
      data: { schedules }
    }: AxiosResponse<ResScheduleWithDefault> = yield call(
      apiDefault().get,
      scheduleUrl
    );

    schedules.sort((a, b) =>
      a.start_date < b.start_date ? -1 : a.end_date < b.end_date ? -1 : 1
    );

    yield put(setSchedules(schedules));
  } catch (err) {
    const { status } = getAxiosError(err);

    if (status === 404) {
      toast.error("일정을 불러올 수 없습니다.");
    }
  }
  yield put(endScheduleLoading());
}

function* mainSaga() {
  yield takeEvery(GET_SCHEDULES_SAGA, fetchSchedules);
}

export default mainSaga;
