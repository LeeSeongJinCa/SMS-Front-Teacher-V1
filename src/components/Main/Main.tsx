import React, { FC, ReactElement } from "react";

import * as S from "./style";
import Schedule from "./Schedule/Schedule";
import ScheduleDetail from "./ScheduleDetail/ScheduleDetail";

interface Props {}

const Main: FC<Props> = (): ReactElement => {
  return (
    <S.MainWrap>
      <S.MainLeft>
        <Schedule />
      </S.MainLeft>
      <S.MainRight>
        <ScheduleDetail />
      </S.MainRight>
    </S.MainWrap>
  );
};

export default Main;
