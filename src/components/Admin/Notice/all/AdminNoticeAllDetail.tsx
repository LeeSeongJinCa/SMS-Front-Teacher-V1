import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import { NoticeDetail } from "../../../default";
import { NoticeDetailHeaderSet } from "../../../default/NoticeDetail/NoticeDetail";

const AdminNoticeAllDetail: FC = () => {
  const { boardData, loading } = useSelector((state: stateType) => ({
    boardData: state.noticeDetail,
    loading: state.loading["notice/GET_NOTICE_DETAIL"]
  }));

  const headerData: NoticeDetailHeaderSet = {
    imgSrc: NavIconNoticeMint,
    title: "전체 공지사항",
    href: "/admin/notice/all",
    color: "#23B2AD"
  };
  return (
    <NoticeDetail
      headerData={headerData}
      boardData={boardData}
      loading={loading}
    />
  );
};

export default AdminNoticeAllDetail;
