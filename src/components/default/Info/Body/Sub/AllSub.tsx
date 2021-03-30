import React, { FC } from "react";
import { useSelector } from "react-redux";
import { stateType } from "../../../../../modules/reducer";
import InfoDetailSub from "./InfoDetailSub";

const AllSub: FC = () => {
  const { logo_uri, field, notices } = useSelector((state: stateType) => ({
    ...state.clubDetail,
    notices: state.noticeList.announcements
  }));
  return (
    <InfoDetailSub
      imgSrc={logo_uri}
      tag={field}
      notices={notices}
      baseUrl="/circles/notice"
    />
  );
};

export default AllSub;
