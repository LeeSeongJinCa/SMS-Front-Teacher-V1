import React, { FC, ChangeEvent, memo, useState, useCallback } from "react";

import * as S from "./styles";

import { SearchInput } from "../../default";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterHandler: (field: string) => void;
  placeHolder: string;
  count: number;
  children: string;
  field: string;
}

const Category: FC<Props> = ({
  children,
  filterHandler,
  onChange,
  placeHolder,
  count,
  field
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const changeMenuIsOpen = useCallback(() => {
    setMenuIsOpen(prev => !prev);
  }, []);

  return (
    <S.CategoryWrap>
      <S.Category>
        <S.FieldWrap onClick={changeMenuIsOpen}>
          <S.Triangle />
          <span>{field || "전체"}</span>
          <S.Fields isOpen={menuIsOpen}>
            <S.Field onClick={() => filterHandler("")}>전체</S.Field>
            <S.Field onClick={() => filterHandler("SW개발")}>SW개발</S.Field>
            <S.Field onClick={() => filterHandler("임베디드")}>
              임베디드
            </S.Field>
            <S.Field onClick={() => filterHandler("정보보안")}>
              정보보안
            </S.Field>
          </S.Fields>
        </S.FieldWrap>
        <div>
          {children}
          <S.Count>{count}</S.Count>
        </div>
      </S.Category>
      <SearchInput onChange={onChange} placeHolder={placeHolder} />
    </S.CategoryWrap>
  );
};

export default memo(Category);
