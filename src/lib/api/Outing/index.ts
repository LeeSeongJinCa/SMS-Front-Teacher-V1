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

export const getEndOutingFiltered = (period: number) => {
  const ONE_DAY_SECOND = 86400;
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();

  const end = Math.floor(+new Date(y, m, d + 1) / 1000);
  const start = end - ONE_DAY_SECOND * period - ONE_DAY_SECOND;

  return apiDefault().get<{ outings: ResOutingCardListItem[] }>(
    `/outings/with-filter?start_time=${start}&end_time=${end}&count=0`
  );
};
