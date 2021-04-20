import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import * as S from "./styles";
import NavigationSubHeader from "./Header/NavigationSubHeader";
import NavigationSubBody from "./Body/NavigationSubBody";
import CloseNavigation from "./Close/CloseNavigation";

import { stateType } from "../../../modules/reducer";
import { customSelector } from "../../../lib/utils";
import { SubNavObj } from "../../../lib/static";

function Sleep(delaySecond: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delaySecond * 1000);
  });
}

interface Props {
  subRouteData: SubNavObj;
}

const NavigationSub: FC<Props> = ({ subRouteData }) => {
  const isClose = customSelector(state => state.subNav.isClose);
  const mainUrl = useSelector((store: stateType) => store.page.mainUrl);
  const isActive =
    mainUrl === "동아리" ||
    mainUrl === "외출신청" ||
    mainUrl === "외출 관리" ||
    mainUrl === "공지사항";

  const isAdmin = mainUrl === "외출 관리" || mainUrl === "공지사항";

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (isClose || !isActive) {
      ref.current.style.minWidth = "unset";
      return;
    }
    Sleep(0.25).then(() => {
      ref.current.style.minWidth = "220px";
      return;
    });
  }, [isClose, isActive]);

  return (
    <S.Container
      colorSet={isAdmin ? "#23B2AD" : "#5323B2"}
      isActive={isActive}
      isClose={isActive && isClose}
      ref={ref}
    >
      {!isClose && isActive && (
        <>
          <NavigationSubHeader>{mainUrl}</NavigationSubHeader>
          <NavigationSubBody page={mainUrl} subRouteData={subRouteData} />
        </>
      )}

      {isClose && isActive && <CloseNavigation subRouteData={subRouteData} />}
    </S.Container>
  );
};

export default NavigationSub;
