import {
  ReqOutingCardFilter,
  ResOutingCardListItem
} from "../../../lib/api/payloads/OutingCard";

export interface OutingCard {
  id: number;
  number: number;
  name: string;
  date: string;
  time: string;
  where: string;
  reason: string;
}

export const UPDATE_OUTING_CARD_LIST = "outingCard/UPDATE_OUTING_CARD_LIST" as const;
export const UPDATE_OUTING_CARD_MODAL = "outingCard/UPDATE_OUTING_CARD_MODAL" as const;

export const GET_OUTING_CARD_LIST = "outingCard/GET_OUTING_CARD_LIST" as const;

export const SHOW_OUTING_CARD_MODAL = "outingCard/SHOW_OUTING_CARD_MODAL" as const;
export const CLOSE_OUTING_CARD_MODAL = "outingCard/CLOSE_OUTING_CARD_MODAL" as const;

export const GET_OUTING_CARD_LIST_SAGA = "outingCard/GET_OUTING_CARD_LIST_SAGA" as const;

export const REJECT_OUTING_CARD_SAGA = "outingCard/REJECT_OUTING_CARD_SAGA" as const;
export const APPROVE_OUTING_CARD_SAGA = "outingCard/APPROVE_OUTING_CARD_SAGA" as const;
export const FINISH_OUTING_CARD_SAGA = "outingCard/FINISH_OUTING_CARD_SAGA" as const;

export const finishOutingCardSaga = (uuid: string) => ({
  type: FINISH_OUTING_CARD_SAGA,
  payload: uuid
});
export const rejectOutingCardSaga = (payload: string) => ({
  type: REJECT_OUTING_CARD_SAGA,
  payload
});
export const approveOutingCardSaga = (payload: string) => ({
  type: APPROVE_OUTING_CARD_SAGA,
  payload
});

export const getOutingCardList = (payload: ResOutingCardListItem[]) => ({
  type: GET_OUTING_CARD_LIST,
  payload
});

export const ShowOutingCardModal = (payload: string) => ({
  type: SHOW_OUTING_CARD_MODAL,
  payload
});
export const CloseOutingCardModal = () => ({
  type: CLOSE_OUTING_CARD_MODAL
});

export const getOutingCardListSaga = (payload: ReqOutingCardFilter) => ({
  type: GET_OUTING_CARD_LIST_SAGA,
  payload
});

export const updateOutingCardList = (payload: OutingCard[]) => ({
  type: UPDATE_OUTING_CARD_LIST,
  payload
});

export const updateOutingCardModal = (payload: number) => ({
  type: UPDATE_OUTING_CARD_MODAL,
  payload
});

export type OutingCardAction =
  | ReturnType<typeof updateOutingCardList>
  | ReturnType<typeof updateOutingCardModal>
  | ReturnType<typeof getOutingCardList>
  | ReturnType<typeof ShowOutingCardModal>
  | ReturnType<typeof CloseOutingCardModal>
  | ReturnType<typeof rejectOutingCardSaga>
  | ReturnType<typeof approveOutingCardSaga>;
