import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  nextTitle: string;
  nextAnnouncementUuid: string;
  previousAnnouncementUuid: string;
  previousTitle: string;
  baseHref: string;
}

const PageMove: FC<Props> = ({
  previousTitle,
  nextTitle,
  previousAnnouncementUuid,
  nextAnnouncementUuid,
  baseHref
}) => {
  return (
    <S.MovePageWrap>
      {nextAnnouncementUuid && (
        <S.MovePage to={`${baseHref}/${nextAnnouncementUuid}`}>
          <span>이전글</span>
          <S.MoveIcon rotate={0} />
          <S.PageTitle>{nextTitle}</S.PageTitle>
        </S.MovePage>
      )}
      {previousAnnouncementUuid && (
        <S.MovePage to={`${baseHref}/${previousAnnouncementUuid}`}>
          <span>다음글</span>
          <S.MoveIcon rotate={180} />
          <S.PageTitle>{previousTitle}</S.PageTitle>
        </S.MovePage>
      )}
    </S.MovePageWrap>
  );
};

export default PageMove;
