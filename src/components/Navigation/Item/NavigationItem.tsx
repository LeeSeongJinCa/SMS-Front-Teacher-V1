import React, { FC, memo } from "react";

import * as S from "./styles";

interface Props {
  src: string;
  name: string;
  route: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationItem: FC<Props> = ({ src, name, route, isActive, onClick }) => {
  return (
    <S.Linker to={route}>
      <S.Container
        className={isActive ? "active" : ""}
        isActive={isActive}
        onClick={onClick}
      >
        <S.Header>
          <S.Img src={src} />
          <S.ItemName>{name}</S.ItemName>
        </S.Header>
        {isActive && <S.Triangle />}
      </S.Container>
    </S.Linker>
  );
};

export default memo(NavigationItem);
