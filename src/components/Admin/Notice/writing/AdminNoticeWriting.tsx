import React, { FC } from "react";
import { NoticeWriteSet } from "../../../default/NoticeWrite/NoticeWrite";
import { NoticeWrite } from "../../../default";
import { NavIconNoticeMint } from "../../../../assets";

const AdminNoticeWrite: FC = () => {
  const noticeWriteSet: NoticeWriteSet = {
    color: "#23B2AD",
    imgSrc: NavIconNoticeMint,
    title: "학교 공지사항 작성",
    type: "school"
  };
  return <NoticeWrite setting={noticeWriteSet} />;
};

export default AdminNoticeWrite;
