import React, { FC } from "react";

import * as S from "./styles";

import { Restart } from "../../../../assets";
import { PageType, SubNavObj } from "../../../../lib/static";
import SubNavigationItemContainer from "../../Item/SubNavigationItemContainer";
import useCustomSelector from "../../../../lib/hooks/useCustomSelector";
import NavigationItem from "../../Item/NavigationItem";

interface Props {
  page: string;
  subRouteData: SubNavObj;
}

const NavigationSubBody: FC<Props> = ({ page, subRouteData }) => {
  const subUrl = useCustomSelector().page.subUrl;

  return (
    <S.Container>
      {subRouteData[page as PageType].map(({ name, url, activeUrl, route }) => (
        <SubNavigationItemContainer
          key={route}
          src={subUrl === name ? activeUrl : url}
          name={name}
          route={route}
          isActive={subUrl === name}
        />
      ))}
      <NavigationItem
        src={Restart}
        name="외출 메뉴얼 확인하기"
        route="/out/wait"
        isActive={false}
        onClick={() => {
          localStorage.removeItem("taught");
        }}
      />
    </S.Container>
  );
};

export default NavigationSubBody;
