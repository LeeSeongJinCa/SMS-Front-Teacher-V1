import { RecruitmentMember } from "../Recruitment";

export interface ReqAddRecruitment {
  club_uuid: string;
  recruit_concept: string;
  end_period: string;
  members: RecruitmentMember[];
}

export interface ReqEditRecruitment {
  recruit_concept: string;
  recruitment_uuid: string;
  members: RecruitmentMember[];
}

export interface Student {
  grade: number;
  group: number;
  student_number: number;
  name: string;
  phone_number: string;
  profile_uri: string;
  student_uuid: string;
}

export interface ClubListItem {
  club_uuid: string;
  leader_uuid: string;
  member_uuids: string[];
  string;
  name: string;
  field: string;
  location: string;
  floor: number;
  club_concept: string;
  introduction: string;
  link: string;
  logo_uri: string;
}

export interface ClubDetail {
  name: string;
  club_concept: string;
  introduction: string;
  leader_uuid: string;
  member_uuids: string[];
  location: string;
  floor: number;
  logo_uri: string;
  field: string;
  link: string;
}
