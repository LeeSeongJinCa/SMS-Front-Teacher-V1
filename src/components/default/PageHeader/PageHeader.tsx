import React, { FC, memo } from "react";

import * as S from "./styles";

interface Props {
  imgSrc?: string;
  title: string;
  type: string;
}

const PageHeader: FC<Props> = ({ imgSrc, title, type }) => {
  return (
    <S.Container type={type}>
      {imgSrc && <S.Img src={imgSrc} type={type} />}
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
};

export default memo(PageHeader);
