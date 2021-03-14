import React, { FC, MouseEvent } from "react";

import * as S from "../style";
import { padNum } from "../../../lib/utils";

interface Props {
  uuid: string;
  isPrev: boolean;
  detail: string;
  start: number;
  end: number;
  handleEditSchedule: (e: MouseEvent<HTMLButtonElement>) => void;
  handleRemoveSchedule: (e: MouseEvent<HTMLButtonElement>) => void;
}

const getLocalDate = (dateNum: number) => {
  const date = new Date(dateNum);

  return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
};

const ScheduleDetailItem: FC<Props> = ({
  uuid,
  isPrev,
  detail,
  start,
  end,
  handleEditSchedule,
  handleRemoveSchedule
}) => {
  return (
    <S.DetailBodyItem className={isPrev ? "prev" : ""}>
      <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
      <S.DetailBodyItemData>
        {start === end
          ? getLocalDate(start)
          : `${getLocalDate(start)} - ${getLocalDate(end)}`}
      </S.DetailBodyItemData>
      <S.DetailBodyItemButtonWrap>
        <S.DetailBodyItemButton data-uuid={uuid} onClick={handleEditSchedule}>
          수정
        </S.DetailBodyItemButton>
        <S.DetailBodyItemButton data-uuid={uuid} onClick={handleRemoveSchedule}>
          삭제
        </S.DetailBodyItemButton>
      </S.DetailBodyItemButtonWrap>
    </S.DetailBodyItem>
  );
};

export default ScheduleDetailItem;
