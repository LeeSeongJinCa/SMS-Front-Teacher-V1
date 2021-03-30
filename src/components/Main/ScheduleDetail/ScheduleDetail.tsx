import React, { FC, memo, MouseEvent } from "react";
import { useDispatch } from "react-redux";

import ScheduleDetailItem from "./ScheduleDetailItem";

import * as S from "../style";
import { Loading } from "../../default";
import { padNum } from "../../../lib/utils";
import useCustomSelector from "../../../lib/hooks/useCustomSelector";
import { setTargetUuid } from "../../../modules/action/main";

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

const getLocalDate = (dateNum: number) => {
  const date = new Date(dateNum);

  return `${padNum(date.getMonth() + 1)}.${padNum(date.getDate())}`;
};

const ScheduleDetail: FC<Props> = ({
  handleShowAdd,
  handleShowEdit,
  handleShowDelete
}) => {
  const dispatch = useDispatch();
  const {
    main: { schedules, scheduleLoading, selectedDate }
  } = useCustomSelector();

  const handleEditSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    const uuid = e.currentTarget.dataset.uuid;

    dispatch(setTargetUuid(uuid));
    handleShowEdit();
  };

  const handleRemoveSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    const uuid = e.currentTarget.dataset.uuid;

    dispatch(setTargetUuid(uuid));
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
      <S.DetailBody>
        {scheduleLoading ? (
          <S.DetailLoadingWrap>
            <Loading size="100px" />
          </S.DetailLoadingWrap>
        ) : (
          schedules.map(
            ({ detail, start_date: s, end_date: e, schedule_uuid: uuid }) => {
              const selectedTime = new Date(selectedDate).getTime();
              const isPrev = +fixedDate > e;

              if (selectedDate) {
                if (s <= selectedTime && selectedTime <= e) {
                  return (
                    <ScheduleDetailItem
                      key={uuid}
                      uuid={uuid}
                      isPrev={isPrev}
                      detail={detail}
                      start={s}
                      end={e}
                      handleEditSchedule={handleEditSchedule}
                      handleRemoveSchedule={handleRemoveSchedule}
                    />
                  );
                }

                return null;
              }

              return (
                <ScheduleDetailItem
                  key={uuid}
                  uuid={uuid}
                  isPrev={isPrev}
                  detail={detail}
                  start={s}
                  end={e}
                  handleEditSchedule={handleEditSchedule}
                  handleRemoveSchedule={handleRemoveSchedule}
                />
              );
            }
          )
        )}
      </S.DetailBody>
    </S.ScheduleDetail>
  );
};

export default memo(ScheduleDetail);
