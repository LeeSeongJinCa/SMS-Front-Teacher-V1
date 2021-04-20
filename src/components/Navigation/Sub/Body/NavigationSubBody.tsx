import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "./styles";

import { stateType } from "../../../../modules/reducer";
import { PageType, SubNavObj } from "../../../../lib/static";
import SubNavigationItemContainer from "../../Item/SubNavigationItemContainer";

interface Props {
  page: string;
  subRouteData: SubNavObj;
}

const NavigationSubBody: FC<Props> = ({ page, subRouteData }) => {
  const subUrl = useSelector((store: stateType) => store.page.subUrl);
  return (
    <S.Container>
      {subRouteData[page as PageType].map(
        ({ name, url, activeUrl, route }, index) => (
          <SubNavigationItemContainer
            isActive={subUrl === name}
            name={name}
            src={subUrl === name ? activeUrl : url}
            route={route}
            key={index}
          />
        )
      )}
    </S.Container>
  );
};

export default NavigationSubBody;
