import React, { FC, ReactElement } from 'react';

import * as S from './style';
import Schedule from './Schedule/Schedule';
import ScheduleDetail from './ScheduleDetail/ScheduleDetail';
import Outing from './Outing/Outing';
import Timetable from './Timetable/Timetable';

interface Props {}

const Main: FC<Props> = (): ReactElement => {
  return (
    <S.MainWrap>
      <S.MainLeft>
        <Schedule />
        <Timetable />
      </S.MainLeft>
      <S.MainRight>
        <ScheduleDetail />
        <Outing />
      </S.MainRight>
    </S.MainWrap>
  );
};

export default Main;