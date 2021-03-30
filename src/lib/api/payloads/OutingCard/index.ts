export type OutingActions =
  | "start"
  | "end"
  | "teacher-approve"
  | "teacher-reject"
  | "certify"
  | "parent-approve"
  | "parent-reject";

export interface ResOutingCardListItem {
  outing_uuid: string;
  name: string;
  grade: number;
  group: number;
  number: number;
  arrival_time?: number;
  place: string;
  reason: string;
  start_time: number;
  end_time: number;
  outing_situation: string;
  outing_status: string;
  is_late: boolean;
}

export interface OutingCardFilter {
  grade?: number;
  group?: number;
  floor?: number;
}

export interface SetOutingCard {
  action: OutingActions;
  outing_uuid: string;
}

export interface ReqOutingCardFilter extends OutingCardFilter {
  status: number;
}
