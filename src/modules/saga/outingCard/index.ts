import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import {
  call,
  delay,
  getContext,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import {
  getOutingCardList,
  setActionOutingCard
} from "../../../lib/api/OutingCard";
import { OutingStatus } from "../../../lib/api/payloads/Outing";
import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import { errorHandler } from "../../../lib/utils";
import { finishLoading, startLoading } from "../../action/loading";
import {
  getOutingCardListSaga as getOutingCardListSagaCreater,
  GET_OUTING_CARD_LIST_SAGA,
  getOutingCardList as getOutingCardListCreater,
  approveOutingCardSaga as approveOutingCardSagaCreater,
  rejectOutingCardSaga as rejectOutingCardSagaCreater,
  finishOutingCardSaga as finishOutingCardSagaCreator,
  APPROVE_OUTING_CARD_SAGA,
  REJECT_OUTING_CARD_SAGA,
  CloseOutingCardModal,
  FINISH_OUTING_CARD_SAGA,
  TEACHER_FINISH_OUTING_CARD_SAGA,
  ADD_OUTING_CARD_LIST_SAGA,
  addOutingCardList,
  GET_OUTING_CARD_LIST
} from "../../action/outingCard";

function* getOutingCardListSaga(
  action: ReturnType<typeof getOutingCardListSagaCreater>
) {
  yield put(startLoading(GET_OUTING_CARD_LIST));
  try {
    const res: AxiosResponse<{ outings: ResOutingCardListItem[] }> = yield call(
      getOutingCardList,
      action.payload
    );

    yield put(getOutingCardListCreater(res.data.outings));
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
  yield put(finishLoading(GET_OUTING_CARD_LIST));
}

function* addOutingCardListSaga(
  action: ReturnType<typeof getOutingCardListSagaCreater>
) {
  try {
    const res: AxiosResponse<{ outings: ResOutingCardListItem[] }> = yield call(
      getOutingCardList,
      action.payload
    );

    yield put(addOutingCardList(res.data.outings));
    yield delay(1000);
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* approveOutingCardSaga(
  action: ReturnType<typeof approveOutingCardSagaCreater>
) {
  try {
    yield call(setActionOutingCard, {
      action: "teacher-approve",
      outing_uuid: action.payload
    });

    toast.success("성공적으로 승인하였습니다.");
    yield put(CloseOutingCardModal());
    yield put(
      getOutingCardListSagaCreater({ status: OutingStatus["학부모 승인"] })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}
function* rejectOutingCardSaga(
  action: ReturnType<typeof rejectOutingCardSagaCreater>
) {
  try {
    yield call(setActionOutingCard, {
      action: "teacher-reject",
      outing_uuid: action.payload
    });
    toast.success("성공적으로 거절하였습니다.");
    yield put(CloseOutingCardModal());
    yield put(
      getOutingCardListSagaCreater({ status: OutingStatus["학부모 승인"] })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* finishOutingCardSaga(
  action: ReturnType<typeof finishOutingCardSagaCreator>
) {
  try {
    yield call(setActionOutingCard, {
      action: "certify",
      outing_uuid: action.payload
    });
    toast.success("성공적으로 승인했습니다.");
    yield put(
      getOutingCardListSagaCreater({ status: OutingStatus["외출 종료"] })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* teacherFinishOutingCardSaga(
  action: ReturnType<typeof finishOutingCardSagaCreator>
) {
  try {
    yield call(setActionOutingCard, {
      action: "end",
      outing_uuid: action.payload
    });
    toast.success("성공적으로 종료했습니다.");
    yield put(
      getOutingCardListSagaCreater({ status: OutingStatus["외출 시작"] })
    );
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* outingCardSaga() {
  yield takeEvery(GET_OUTING_CARD_LIST_SAGA, getOutingCardListSaga);
  yield takeEvery(ADD_OUTING_CARD_LIST_SAGA, addOutingCardListSaga);
  yield takeEvery(APPROVE_OUTING_CARD_SAGA, approveOutingCardSaga);
  yield takeEvery(REJECT_OUTING_CARD_SAGA, rejectOutingCardSaga);
  yield takeEvery(FINISH_OUTING_CARD_SAGA, finishOutingCardSaga);
  yield takeEvery(TEACHER_FINISH_OUTING_CARD_SAGA, teacherFinishOutingCardSaga);
}

export default outingCardSaga;
