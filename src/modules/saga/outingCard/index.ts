import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { all, call, getContext, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import {
  getOutingCardList,
  setActionOutingCard
} from "../../../lib/api/OutingCard";
import { OutingStatus } from "../../../lib/api/payloads/Outing";
import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import { errorHandler } from "../../../lib/utils";
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
  FINISH_OUTING_CARD_SAGA
} from "../../action/outingCard";

function* getOutingCardListSaga(
  action: ReturnType<typeof getOutingCardListSagaCreater>
) {
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

function* outingCardSaga() {
  yield takeEvery(GET_OUTING_CARD_LIST_SAGA, getOutingCardListSaga);
  yield takeEvery(APPROVE_OUTING_CARD_SAGA, approveOutingCardSaga);
  yield takeEvery(REJECT_OUTING_CARD_SAGA, rejectOutingCardSaga);
  yield takeEvery(FINISH_OUTING_CARD_SAGA, finishOutingCardSaga);
}

export default outingCardSaga;
