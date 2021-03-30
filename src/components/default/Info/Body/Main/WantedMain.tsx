import React, { FC, useCallback } from "react";
import * as S from "./styles";
import { DetailContent, Hr, Where, People, Who } from "../../default";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";
import PeoepleContainer from "../../../../../containers/default/AllBodyPeopleContainer";

const WantedMain: FC = () => {
  const {
    introduction,
    location,
    member_uuids,
    leader_uuid,
    recruit_members
  } = useSelector((state: stateType) => ({
    ...state.clubDetail,
    ...state.recruitmentDetail
  }));
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduction || "동아리 소개가 없어요"}</DetailContent>
      <Who data={recruit_members} />
      <Hr />
      <PeoepleContainer membersUuid={member_uuids} leaderUuid={leader_uuid} />
      <Hr />
      <Where>{location}</Where>
    </S.Container>
  );
};

export default WantedMain;
