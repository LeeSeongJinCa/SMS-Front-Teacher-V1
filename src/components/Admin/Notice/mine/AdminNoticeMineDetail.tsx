import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import { NoticeDetail } from "../../../default";
import { NoticeDetailHeaderSet } from "../../../default/NoticeDetail/NoticeDetail";

const AdminNoticeMineDetail: FC = () => {
  const { boardData, loading } = useSelector((state: stateType) => ({
    boardData: state.noticeDetail,
    loading: state.loading["notice/GET_NOTICE_DETAIL"]
  }));
  const headerData: NoticeDetailHeaderSet = {
    isMine: true,
    imgSrc: NavIconNoticeMint,
    title: "내가 올린 공지사항",
    href: "/admin/notice/mine",
    color: "#23B2AD",
    editHref: "/admin/notice/edit"
  };
  return (
    <NoticeDetail
      headerData={headerData}
      boardData={boardData}
      loading={loading}
    />
  );
};

export default AdminNoticeMineDetail;
