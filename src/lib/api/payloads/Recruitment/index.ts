export interface RecruitmentMember {
  grade: number;
  field: string;
  number: number;
}

export interface RecruitmentListItem {
  club_uuid: string;
  recruitment_uuid;
  start_period: string;
  end_period: string;
  recruit_concept;
  recruit_members: RecruitmentMember[];
}

export interface RecruitmentDetail {
  club_uuid: string;
  recruitment_uuid: string;
  start_period: string;
  end_period: string;
  recruit_concept: string;
  recruit_members: RecruitmentMember[];
}
