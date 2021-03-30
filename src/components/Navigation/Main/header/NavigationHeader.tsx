import React, { FC } from "react";
import * as S from "./styles";
import { IconBlack, IconWhite } from "../../../../assets/";
import { Link } from "react-router-dom";

interface Props {
  isManagementMode: boolean;
}

const NavigationHeader: FC<Props> = ({ isManagementMode }) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <Link to="/">
          <S.LogoImg src={isManagementMode ? IconBlack : IconWhite} />
          <S.LogoText>SMS</S.LogoText>
        </Link>
      </S.InnerContainer>
      {isManagementMode && <div>Club Admin Service</div>}
    </S.Container>
  );
};

export default NavigationHeader;
