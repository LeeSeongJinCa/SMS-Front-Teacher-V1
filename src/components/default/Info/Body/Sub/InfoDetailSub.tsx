import React, { FC, memo } from "react";
import * as S from "./styles";
import { RightContent } from "../../default";
import { getImgUrl } from "../../../../../lib/utils";
import { BoardListItem } from "../../../../../lib/api/payloads/Board";
import { Link } from "react-router-dom";

interface Props {
  imgSrc: string;
  tag: string;
  baseUrl?: string;
  notices?: BoardListItem[];
}

const InfoDetailSub: FC<Props> = ({ imgSrc, tag, notices, baseUrl }) => {
  return (
    <S.Container>
      <div>
        <img src={getImgUrl(imgSrc)} />
      </div>
      <RightContent>
        <S.H3>분야</S.H3>
        <S.HashTag>{tag}</S.HashTag>
      </RightContent>
      {notices && notices.length ? (
        <RightContent>
          <S.H3>공지사항</S.H3>
          {notices.map(({ announcement_uuid, title }, i) => {
            if (i > 2) return "";
            return (
              <S.Notice key={i}>
                <Link to={`${baseUrl}/${announcement_uuid}`}>{title}</Link>
              </S.Notice>
            );
          })}
        </RightContent>
      ) : (
        ""
      )}
    </S.Container>
  );
};

export default memo(InfoDetailSub);
