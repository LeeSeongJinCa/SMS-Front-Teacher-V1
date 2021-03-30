import React from "react";
import { FC } from "react";
import * as S from "./styles";
import MainNavigationItemContainer from "../../Item/MainNavigationItemContainer";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

import MainSubNavigationItemContainer from "../../Item/MainSubNavigationItemContainer";

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
  const mainUrl = useSelector((store: stateType) => store.page.mainUrl);

  return (
    <S.Container>
      {navItemArr.map(({ name, white, blue, route }, index) => (
        <MainNavigationItemContainer
          isActive={mainUrl === name}
          name={name}
          src={mainUrl === name ? blue : white}
          route={route}
          key={route}
        />
      ))}

      {mainSubArr.map(({ name, white, blue, route, subUrl }, index) => (
        <MainSubNavigationItemContainer
          isActive={mainUrl === name}
          name={name}
          src={mainUrl === name ? blue : white}
          route={route}
          subUrl={subUrl}
          key={route}
        />
      ))}
    </S.Container>
  );
};

export default NavigationBody;
