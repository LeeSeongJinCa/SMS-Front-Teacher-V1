import React, { FC, useEffect, useRef } from "react";

import * as S from "./styles";
import NavigationSubHeader from "./Header/NavigationSubHeader";
import NavigationSubBody from "./Body/NavigationSubBody";
import CloseNavigation from "./Close/CloseNavigation";

import { SubNavObj } from "../../../lib/static";
import useCustomSelector from "../../../lib/hooks/useCustomSelector";

interface Props {
  subRouteData: SubNavObj;
}

const NavigationSub: FC<Props> = ({ subRouteData }) => {
  const {
    page: { mainUrl },
    subNav: { isClose }
  } = useCustomSelector();
  const isActive = mainUrl === "외출 관리" || mainUrl === "공지사항";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref) return;
    if (isClose || !isActive) {
      ref.current.style.minWidth = "auto";
      return;
    }
    ref.current.style.minWidth = "220px";
  }, [isClose, isActive]);

  return (
    <S.Container isActive={isActive} isClose={isActive && isClose} ref={ref}>
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
