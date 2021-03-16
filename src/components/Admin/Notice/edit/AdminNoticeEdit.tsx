import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavIconNoticeMint } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import { NoticeEdit } from "../../../default";
import { NoticeEditSet } from "../../../default/NoticeEdit/NoticeEdit";

const AdminNoticeEdit: FC = () => {
  const editData = useSelector((state: stateType) => state.noticeDetail);

  const setting: NoticeEditSet = {
    color: "#23B2AD",
    imgSrc: NavIconNoticeMint,
    title: "학교 공지사항 수정",
    type: "school",
    cancelHref: "/admin/notice"
  };
  return <NoticeEdit editData={editData} setting={setting} />;
};

export default AdminNoticeEdit;
