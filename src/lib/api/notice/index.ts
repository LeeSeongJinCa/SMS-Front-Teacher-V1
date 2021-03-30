import { AxiosResponse } from "axios";
import { apiDefault } from "../client";
import {
  ReqBoardEdit,
  ReqBoardWrite,
  ResBoardDetail,
  ResBoardList
} from "../payloads/Board";

export const getNoticeList = (
  type: "school" | "club",
  page?: number
): Promise<AxiosResponse<ResBoardList>> =>
  apiDefault().get(`/announcements/types/${type}?start=${page || 0}`);

export const getNoticeWriterList = (
  uuid: string,
  page: number
): Promise<AxiosResponse<ResBoardList>> =>
  apiDefault().get(`/announcements/writer-uuid/${uuid}?start=${page}`);

export const getNoticeDetail = (
  uuid: string
): Promise<AxiosResponse<ResBoardDetail>> =>
  apiDefault().get(`/announcements/uuid/${uuid}`);

export const editNotice = (
  payload: ReqBoardEdit
): Promise<AxiosResponse<{}>> => {
  const { content, title, uuid, target_grade, target_group } = payload;
  return apiDefault().patch(`/announcements/uuid/${uuid}`, {
    title,
    content,
    target_grade,
    target_group
  });
};

export const deleteNotice = (uuid: string): Promise<AxiosResponse<{}>> => {
  return apiDefault().delete<{ id: string }>(`/announcements/uuid/${uuid}`);
};

export const writeNotice = (payload: ReqBoardWrite) => {
  return apiDefault().post("/announcements", payload);
};

export const searchSchoolNotice = (payload: {
  page: number;
  query: string;
}): Promise<AxiosResponse<ResBoardList>> => {
  const { query, page } = payload;
  return apiDefault().get(
    `/announcements/types/school/query/${query}?start=${page || 0}`
  );
};

export const searchClubNotice = (payload: {
  page: number;
  query: string;
}): Promise<AxiosResponse<ResBoardList>> => {
  const { query, page } = payload;
  return apiDefault().get(
    `/announcements/types/club/query/${query}?staart=${page || 0}`
  );
};
