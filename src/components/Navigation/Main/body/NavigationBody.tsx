import React, { FC } from "react";

import * as S from "./styles";

import MainNavigationItemContainer from "../../Item/MainNavigationItemContainer";
import MainSubNavigationItemContainer from "../../Item/MainSubNavigationItemContainer";
import useCustomSelector from "../../../../lib/hooks/useCustomSelector";

export interface NavItem {
  name: string;
  white: string;
  blue: string;
  route: string;
}

export interface MainSubItem extends NavItem {
  subUrl: string;
}

interface Props {
  navItemArr: NavItem[];
  mainSubArr: MainSubItem[];
}

const NavigationBody: FC<Props> = ({ navItemArr, mainSubArr }) => {
  const mainUrl = useCustomSelector().page.mainUrl;

  return (
    <S.Container>
      {navItemArr.map(({ name, white, blue, route }) => (
        <MainNavigationItemContainer
          key={route}
          src={mainUrl === name ? blue : white}
          name={name}
          route={route}
          isActive={mainUrl === name}
        />
      ))}

      {mainSubArr.map(({ name, white, blue, route }) => (
        <MainSubNavigationItemContainer
          key={route}
          src={mainUrl === name ? blue : white}
          name={name}
          route={route}
          isActive={mainUrl === name}
        />
      ))}
    </S.Container>
  );
};

export default NavigationBody;
