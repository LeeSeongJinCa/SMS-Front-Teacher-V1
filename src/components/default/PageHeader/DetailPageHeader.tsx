import React, { FC, memo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import PageHeader from "./PageHeader";

import { Hr } from "../Board/styles";
import { NoticeDetailHeaderSet } from "../NoticeDetail/NoticeDetail";
import Confirm from "../../../lib/confirm/confirm";
import { deleteNotice } from "../../../modules/action/notice/detail";
import { BoardType, ReqBoardDelete } from "../../../lib/api/payloads/Board";

const DetailPageHeader: FC<NoticeDetailHeaderSet> = ({
  isMine,
  color,
  imgSrc,
  title,
  href,
  editHref
}) => {
  const dispatch = useDispatch();
  const uuid: string = useParams<{ id: string }>().id;

  const deleteNoticeFunc = useCallback(async () => {
    const confirmRes: boolean = await Confirm.confirm([
      "게시물이 삭제됩니다",
      "취소",
      "삭제"
    ]);
    if (!confirmRes) return;

    const type: BoardType = "school";
    const payload: ReqBoardDelete = { uuid, type };
    dispatch(deleteNotice(payload));
  }, [uuid, href]);

  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.DETAIL} />
        <div>
          {href && (
            <S.Button color={color} to={href}>
              목록으로
            </S.Button>
          )}
          {isMine && (
            <>
              <S.Button
                to={editHref ? `${editHref}/${uuid}` : `${href}/edit/${uuid}`}
                color={color}
              >
                수정
              </S.Button>
              <S.Button to="#" color={color} onClick={deleteNoticeFunc}>
                삭제
              </S.Button>
            </>
          )}
        </div>
      </S.Wrap>
      <Hr />
    </>
  );
};

export default memo(DetailPageHeader);
