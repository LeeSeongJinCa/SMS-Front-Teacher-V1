import { call, put, takeEvery } from "redux-saga/effects";
import { finishLoading, startLoading } from "../../../action/loading";
import * as recruitmentApi from "../../../../lib/api/Recruitment";
import {
  getRecruitMentDetail,
  getRecruitMentDetailSuccess,
  GET_RECRUITMENT_DETAIL
} from "../../../action/recruitment/detail";
import { AxiosResponse } from "axios";
import { RecruitmentDetail } from "../../../../lib/api/payloads/Recruitment";

function* getRecruitmentDetailSaga(
  action: ReturnType<typeof getRecruitMentDetail>
) {
  yield put(startLoading(GET_RECRUITMENT_DETAIL));
  try {
    const res: AxiosResponse<RecruitmentDetail> = yield call(
      recruitmentApi.getRecruitMentDetail,
      action.payload
    );

    yield put(getRecruitMentDetailSuccess(res.data));
  } catch (err) {}
  yield put(finishLoading(GET_RECRUITMENT_DETAIL));
}

function* recruitmentDetailSaga() {
  yield takeEvery(GET_RECRUITMENT_DETAIL, getRecruitmentDetailSaga);
}

export default recruitmentDetailSaga;
