import { makeQuery } from "../../utils";
import { apiDefault } from "../client";
import {
  ReqOutingCardFilter,
  ResOutingCardListItem,
  SetOutingCard
} from "../payloads/OutingCard";

export const getOutingCardList = (filterObj: ReqOutingCardFilter) => {
  const query: string = makeQuery(filterObj);

  return apiDefault().get<{ outings: ResOutingCardListItem[] }>(
    `/outings/with-filter?${query}count=8`
  );
};

export const setActionOutingCard = (payload: SetOutingCard) => {
  const { outing_uuid, action } = payload;

  return apiDefault().post(`/outings/uuid/${outing_uuid}/actions/${action}`);
};
