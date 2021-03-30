import React, { FC } from "react";
import { CircleWantedDetail } from "../../../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { getNoticeClubList } from "../../../../modules/action/notice/list";
import { getRecruitMentDetail } from "../../../../modules/action/recruitment/detail";
import { stateType } from "../../../../modules/reducer";
import { getClubDetail } from "../../../../modules/action/club/detail";

const CircleWantedDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const clubUuid: string = useSelector(
    (state: stateType) => state.recruitmentDetail.club_uuid
  );

  const recruitmentUuid: string = (match.params as any).id;
  useEffect(() => {
    dispatch(getRecruitMentDetail(recruitmentUuid));
    dispatch(getNoticeClubList(0));
  }, []);

  useEffect(() => {
    if (!clubUuid) return;
    dispatch(getClubDetail(clubUuid));
  }, [clubUuid]);

  return <CircleWantedDetail />;
};

export default CircleWantedDetailContainer;
