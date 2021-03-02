import { ResDefault } from "..";

export const NORMAL = "normal" as const;
export const EMERGENCY = "emergency" as const;

export type SituationType = typeof NORMAL | typeof EMERGENCY;

export enum OutingStatus {
  "선생님 거절" = -2,
  "학부모 거절" = -1,
  "외출증 신청" = 0,
  "학부모 승인" = 1,
  "선생님 승인" = 2,
  "외출 시작" = 3,
  "외출 종료" = 4,
  "외출 인증 승인" = 5
}

export interface ReqOuting {
  start_time: number;
  end_time: number;
  place: string;
  reason: string;
  situation: SituationType;
}
export interface ResOuting {
  outing_uuid: string;
}
export interface ResHistoryItem {
  end_time: number;
  outing_situation: string;
  outing_status: string;
  outing_uuid: string;
  place: string;
  reason: string;
  start_time: number;
}
export interface ResHistory {
  outings: ResHistoryItem[];
}
export interface ResNaverLocal {
  lastBuildDate: string;
  start: number;
  total: number;
  display: number;
  item: ResNaverLocalItem[];
}
export interface ResNaverLocalItem {
  title: string;
  link: string;
  category: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}

export interface ResLocationWithDefault extends ResNaverLocal, ResDefault {}
export interface ResOutingWithDefault extends ResOuting, ResDefault {}
export interface ResHistoryWithDefault extends ResHistory, ResDefault {}
export interface ResNaverLocalWithDefault extends ResNaverLocal, ResDefault {}
