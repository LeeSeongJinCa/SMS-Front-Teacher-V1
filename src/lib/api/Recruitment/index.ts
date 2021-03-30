import { AxiosResponse } from "axios";
import { apiDefault } from "../client";
import {
  RecruitmentDetail,
  RecruitmentListItem
} from "../payloads/Recruitment";

export const getRecruitMentList = (): Promise<
  AxiosResponse<{
    recruitments: RecruitmentListItem;
  }>
> => apiDefault().get("/recruitments/sorted-by/create-time?count=30");

export const getRecruitMentDetail = (
  uuid: string
): Promise<
  AxiosResponse<{
    recruitments: RecruitmentDetail;
  }>
> => apiDefault().get(`/recruitments/uuid/${uuid}`);
