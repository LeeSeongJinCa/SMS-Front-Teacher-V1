import { call, put, takeEvery } from "redux-saga/effects";
import { finishLoading, startLoading } from "../../../action/loading";
import * as recruitmentApi from "../../../../lib/api/Recruitment";
import {
  getRecruitMentList,
  getRecruitMentListSuccess,
  GET_RECRUITMENT_LIST
} from "../../../action/recruitment/list";
import { AxiosResponse } from "axios";
import { RecruitmentListItem } from "../../../../lib/api/payloads/Recruitment";

function* getRecruitmentListSaga(
  action: ReturnType<typeof getRecruitMentList>
) {
  yield put(startLoading(GET_RECRUITMENT_LIST));
  try {
    const res: AxiosResponse<{
      recruitments: RecruitmentListItem[];
    }> = yield call(recruitmentApi.getRecruitMentList);

    yield put(getRecruitMentListSuccess(res.data.recruitments));
  } catch (err) {}
  yield put(finishLoading(GET_RECRUITMENT_LIST));
}

function* recruitmentListSaga() {
  yield takeEvery(GET_RECRUITMENT_LIST, getRecruitmentListSaga);
}

export default recruitmentListSaga;
