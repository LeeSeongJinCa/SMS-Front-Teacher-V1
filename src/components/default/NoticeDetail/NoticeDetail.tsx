import React, { FC, memo } from "react";
import * as S from "./styles";
import { DetailPageHeader } from "../../../components/default";
import PageMove from "../../default/PageMove/PageMove";
import NoticeDetailBody from "../../Notice/Detail/NoticeDetailBody/NoticeDetailBody";
import { ResBoardDetail } from "../../../lib/api/payloads/Board";

export interface NoticeDetailHeaderSet {
  color: string;
  title: string;
  imgSrc: string;
  href: string;
  editHref?: string;
  isMine?: boolean;
}

export interface Props {
  boardData: ResBoardDetail;
  loading: boolean;
  headerData: NoticeDetailHeaderSet;
}

const NoticeDetail: FC<Props> = ({ boardData, loading, headerData }) => {
  return (
    <S.Container>
      <DetailPageHeader {...headerData} />
      <S.P>{boardData.title}</S.P>
      {!loading && <NoticeDetailBody content={boardData.content} />}
      <PageMove
        baseHref={headerData.href}
        nextAnnouncementUuid={boardData.next_announcement_uuid}
        nextTitle={boardData.next_title}
        previousAnnouncementUuid={boardData.previous_announcement_uuid}
        previousTitle={boardData.previous_title}
      />
    </S.Container>
  );
};

export default NoticeDetail;
