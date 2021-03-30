import { apiDefault } from "../client";
import { ResOutingCardListItem } from "../payloads/OutingCard";

export const getEndOutings = () => {
  return apiDefault().get<{
    outings: ResOutingCardListItem[];
  }>(`/outings/with-filter?status=5`);
};
