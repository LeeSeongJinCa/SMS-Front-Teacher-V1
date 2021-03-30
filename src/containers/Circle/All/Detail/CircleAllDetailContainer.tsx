import React, { FC, useEffect } from "react";
import { CircleAllDetail } from "../../../../components";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { getNoticeSchoolList } from "../../../../modules/action/notice/list";
import { getClubDetail } from "../../../../modules/action/club/detail";

const CircleAllDetailContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const clubUuid = (match.params as any).id;
    dispatch(getNoticeSchoolList(0));
    dispatch(getClubDetail(clubUuid));
  }, []);
  return <CircleAllDetail />;
};

export default CircleAllDetailContainer;
