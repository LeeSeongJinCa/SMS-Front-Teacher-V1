import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { apiDefault } from "../../../lib/api/client";
import {
  ResStudentInfo,
  ResTeacherInfo,
  ResTeacherInfoWithDefault
} from "../../../lib/api/payloads/Login";
import {
  getTeacherInfoSaga,
  GET_TEACHER_INFO_SAGA,
  setInit
} from "../../action/header";

const setLocalStorage = (form: ResStudentInfo | ResTeacherInfo) => {
  localStorage.setItem("sms-user", JSON.stringify(form));
};

function* setTeacherInfoOnStorageSaga(
  action: ReturnType<typeof getTeacherInfoSaga>
) {
  const {
    data: { grade, group, name, phone_number }
  }: AxiosResponse<ResTeacherInfoWithDefault> = yield call(
    apiDefault().get,
    `/teachers/uuid/${action.payload.teacherUuid}`
  );

  const teacherForm: ResTeacherInfo = {
    grade,
    group,
    name,
    phone_number
  };
  const clubUuid = localStorage.getItem("club_uuid");

  setLocalStorage(teacherForm);
  yield put(setInit(teacherForm, clubUuid));
}

function* headerSaga() {
  yield takeEvery(GET_TEACHER_INFO_SAGA, setTeacherInfoOnStorageSaga);
}

export default headerSaga;
