import React, { FC, memo, MouseEvent, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { UserType } from "../../../modules/action/header";
import { setTargetUuid } from "../../../modules/action/main";
import { Loading } from "../../default";
import { padNum } from "../../../lib/utils";

interface Props {
  handleShowAdd?: () => void;
  handleShowEdit?: () => void;
  handleShowDelete?: () => void;
}

const date = new Date();
const fixedDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  9
);

const ScheduleDetail: FC<Props> = ({
  handleShowAdd,
  handleShowEdit,
  handleShowDelete
}): ReactElement => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    main: { schedules, scheduleLoading },
    header: { type }
  } = useSelector((state: stateType) => state);

  const getLocalDate = (dateNum: number) => {
    const date = new Date(dateNum);

    return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
  };

  const handleEditSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    const scheduleUuid = e.currentTarget.dataset.uuid;
    dispatch(setTargetUuid(scheduleUuid));
    handleShowEdit();
  };

  const handleRemoveSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    const scheduleUuid = e.currentTarget.dataset.uuid;
    dispatch(setTargetUuid(scheduleUuid));
    handleShowDelete();
  };

  return (
    <S.ScheduleDetail>
      <S.DetailHeader>
        <S.DetailHeaderTop>
          <S.DetailTitle>세부내용</S.DetailTitle>
          <S.DetailAddSchedule onClick={handleShowAdd}>
            <span>일정 추가</span>
          </S.DetailAddSchedule>
        </S.DetailHeaderTop>
        <S.DetailHead>
          <S.DetailHeadData>일정</S.DetailHeadData>
          <S.DetailHeadData>날짜</S.DetailHeadData>
        </S.DetailHead>
      </S.DetailHeader>
      <S.DetailBody type={type as UserType}>
        {scheduleLoading ? (
          <S.DetailLoadingWrap>
            <Loading size="100px" />
          </S.DetailLoadingWrap>
        ) : (
          schedules.map(({ detail, start_date, end_date, schedule_uuid }) => (
            <S.DetailBodyItem
              key={schedule_uuid}
              className={+fixedDate > end_date ? "prev" : ""}
            >
              <S.DetailBodyItemData>{detail}</S.DetailBodyItemData>
              <S.DetailBodyItemData>
                {start_date === end_date
                  ? getLocalDate(start_date)
                  : `${getLocalDate(start_date)} - ${getLocalDate(end_date)}`}
              </S.DetailBodyItemData>
              <S.DetailBodyItemButtonWrap>
                <S.DetailBodyItemButton
                  data-uuid={schedule_uuid}
                  onClick={handleEditSchedule}
                >
                  수정
                </S.DetailBodyItemButton>
                <S.DetailBodyItemButton
                  data-uuid={schedule_uuid}
                  onClick={handleRemoveSchedule}
                >
                  삭제
                </S.DetailBodyItemButton>
              </S.DetailBodyItemButtonWrap>
            </S.DetailBodyItem>
          ))
        )}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default memo(ScheduleDetail);
