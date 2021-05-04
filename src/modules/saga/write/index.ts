import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { call, getContext, takeEvery } from "redux-saga/effects";

import { writeNotice } from "../../../lib/api/Write";
import { errorHandler } from "../../../lib/utils";
import { writeAction, writeActionCreator } from "../../action/write";

function* writeNoticeSaga(
  action: ReturnType<typeof writeActionCreator.writeNoticeSaga>
) {
  try {
    const { title, content, target_grade, target_group } = action.payload;
    yield call(
      writeNotice,
      "school",
      { title, content },
      { target_grade, target_group }
    );
    toast.dark("공지 작성에 성공 했습니다");
    const history = yield getContext("history");
    history.push("/notice/all");
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* writeSaga() {
  yield takeEvery(writeAction.WRITE_NOTICE_SAGA, writeNoticeSaga);
}

export default writeSaga;
