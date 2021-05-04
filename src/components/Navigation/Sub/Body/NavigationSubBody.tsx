import React, { FC } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { Restart } from "../../../../assets";
import { PageType, SubNavObj } from "../../../../lib/static";
import SubNavigationItemContainer from "../../Item/SubNavigationItemContainer";
import useCustomSelector from "../../../../lib/hooks/useCustomSelector";
import NavigationItem from "../../Item/NavigationItem";
import { setTutorial } from "../../../../modules/action/page";

interface Props {
  page: string;
  subRouteData: SubNavObj;
}

const NavigationSubBody: FC<Props> = ({ page, subRouteData }) => {
  const dispatch = useDispatch();
  const { mainUrl, subUrl } = useCustomSelector().page;

  const onClickTutorial = () => {
    localStorage.removeItem("taught");
    dispatch(setTutorial(true));
  };

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
      {mainUrl === "외출 관리" && (
        <NavigationItem
          src={Restart}
          name="외출 메뉴얼 확인하기"
          route="/out/wait"
          isActive={false}
          onClick={onClickTutorial}
        />
      )}
    </S.Container>
  );
};

export default NavigationSubBody;
