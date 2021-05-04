import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

import { IconBlack, IconWhite } from "../../../../assets/";

interface Props {
  isManagementMode: boolean;
}

const NavigationHeader: FC<Props> = ({ isManagementMode }) => {
  return (
    <div>
      <S.InnerContainer>
        <Link to="/">
          <S.LogoImg
            src={isManagementMode ? IconBlack : IconWhite}
            alt="navigation-background-icon"
            title="navigation-background-icon"
          />
          <S.LogoText>SMS</S.LogoText>
        </Link>
      </S.InnerContainer>
      {isManagementMode && <div>Club Admin Service</div>}
    </div>
  );
};

export default NavigationHeader;
