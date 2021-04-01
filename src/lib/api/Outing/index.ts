import { apiDefault } from "../client";
import { ResDefault } from "../payloads";
import { ResOutingCardListItem } from "../payloads/OutingCard";

export const getEndOutings = () => {
  return apiDefault().get<{
    outings: ResOutingCardListItem[];
  }>(`/outings/with-filter?status=5`);
};

export const patchEndTime = (outingUuid: string, endTime: number) => {
  return apiDefault().patch<ResDefault>(`/outings/uuid/${outingUuid}`, {
    end_time: endTime
  });
};
