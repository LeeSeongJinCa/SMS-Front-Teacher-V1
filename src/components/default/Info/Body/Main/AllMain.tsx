import React, { FC, useCallback } from "react";
import * as S from "./styles";
import { DetailContent, Hr, Where } from "../../default";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";
import PeoepleContainer from "../../../../../containers/default/AllBodyPeopleContainer";

const AllMain = () => {
  const { introduction, location, member_uuids, leader_uuid } = useSelector(
    (state: stateType) => state.clubDetail
  );
  return (
    <S.Container>
      <S.P>동아리 소개</S.P>
      <DetailContent>{introduction}</DetailContent>
      <Hr />
      <PeoepleContainer membersUuid={member_uuids} leaderUuid={leader_uuid} />
      <Hr />
      <Where>{location}</Where>
    </S.Container>
  );
};

export default AllMain;
