import React, { FC } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./styles";

import { PageType, SubNavObj } from "../../../../lib/static";
import { stateType } from "../../../../modules/reducer";
import { subPageMove } from "../../../../modules/action/page";
import { changeSubNavOpen } from "../../../../modules/action/subNav";

interface Props {
  subRouteData: SubNavObj;
}

const CloseNavigation: FC<Props> = ({ subRouteData }) => {
  const { mainUrl, subUrl } = useSelector((store: stateType) => store.page);
  const data = subRouteData[mainUrl as PageType];
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <S.Container>
      {data.map(({ name, activeUrl, url, route }) => (
        <S.ImgWrap
          isActive={name === subUrl}
          onClick={() => {
            if (name === subUrl) dispatch(changeSubNavOpen());
            dispatch(subPageMove(name));
            history.push(route);
          }}
        >
          <S.Img src={name === subUrl ? activeUrl : url} />
        </S.ImgWrap>
      ))}
    </S.Container>
  );
};

export default CloseNavigation;
