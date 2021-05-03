import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { PageType, SubNavObj } from "../../../../lib/static";
import { changeSubNavOpen } from "../../../../modules/action/subNav";
import useCustomSelector from "../../../../lib/hooks/useCustomSelector";

interface Props {
  subRouteData: SubNavObj;
}

const CloseNavigation: FC<Props> = ({ subRouteData }) => {
  const dispatch = useDispatch();
  const { mainUrl, subUrl } = useCustomSelector().page;
  const data = subRouteData[mainUrl as PageType];

  return (
    <S.Container>
      {data.map(({ name, activeUrl, url, route }) => {
        const isActive = name === subUrl;

        const onClick = () => {
          if (isActive) {
            dispatch(changeSubNavOpen());
          }
        };

        return (
          <Link key={name} to={route} onClick={onClick}>
            <S.ImgWrap isActive={isActive}>
              <S.Img src={isActive ? activeUrl : url} />
            </S.ImgWrap>
          </Link>
        );
      })}
    </S.Container>
  );
};

export default CloseNavigation;
