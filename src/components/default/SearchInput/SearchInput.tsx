import React, { FC, ChangeEvent, memo } from "react";

import * as S from "./styles";

import { SearchIcon } from "../../../assets";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const SearchInput: FC<Props> = ({ onChange, placeHolder }) => {
  return (
    <S.InputWrap>
      <S.InputBackground>
        <img src={SearchIcon} />
        <S.Input onChange={onChange} placeholder={placeHolder} />
      </S.InputBackground>
    </S.InputWrap>
  );
};

export default memo(SearchInput);
