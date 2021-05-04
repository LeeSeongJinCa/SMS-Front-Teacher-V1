import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import NavigationHeader from "./header/NavigationHeader";
import NavigationBody from "./body/NavigationBody";

import {
  BackgroundCircle7 as MintBackgroundCircle1,
  BackgroundCircle8 as MintBackgroundCircle2,
  BackgroundCircle9 as MintBackgroundCircle3,
  BackgroundCircle10 as MintBackgroundCircle4
} from "../../../assets";
import { RouteData } from "../../../lib/static";
import { getNavUrl } from "../../../lib/utils";
import { pageMove, subPageMove } from "../../../modules/action/page";

interface Props {
  routeData: RouteData;
}

const NavigationMain: FC<Props> = ({ routeData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const { mainUrl, subUrl } = getNavUrl(history.location.pathname);
    dispatch(pageMove(mainUrl));
    dispatch(subPageMove(subUrl));
  });

  return (
    <S.Container isManagementMode={routeData.isManagementMode}>
      <NavigationHeader isManagementMode={routeData.isManagementMode} />
      <NavigationBody navItemArr={routeData.main} mainSubArr={routeData.sub} />
      <S.BackgroundImgWrap>
        <S.Circle
          src={MintBackgroundCircle1}
          top={150}
          left={190}
          width={100}
          height={100}
        />
        <S.Circle
          src={MintBackgroundCircle2}
          top={450}
          left={-140}
          width={100}
          height={100}
        />
        <S.Circle
          src={MintBackgroundCircle3}
          top={410}
          left={0}
          width={24}
          height={24}
        />
        <S.Circle
          src={MintBackgroundCircle4}
          top={410}
          left={-40}
          width={220}
          height={220}
        />
      </S.BackgroundImgWrap>
    </S.Container>
  );
};

export default NavigationMain;
``;
