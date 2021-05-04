import React, { FC, ChangeEvent, memo } from "react";

import * as S from "./styles";
import PageHeader from "./PageHeader";

import { Hr } from "../Board/styles";
import { SearchInput } from "../../default";

interface Props {
  imgSrc: string;
  title: string;
  newButton?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListPageHeader: FC<Props> = ({ imgSrc, title, onChange, newButton }) => {
  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.LIST} />
        <S.InputWrap>
          <SearchInput
            placeHolder="제목 또는 글쓴이를 입력하세요"
            onChange={onChange}
          />
          {newButton && (
            <S.Button to="/management/write" color="black">
              새공지
            </S.Button>
          )}
        </S.InputWrap>
      </S.Wrap>
      <Hr />
    </>
  );
};

export default memo(ListPageHeader);
