import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback
} from "react";
import { useSelector } from "react-redux";

import * as S from "./style";
import CircleBack from "./CircleBack";

import { OutingClose } from "../../../assets";
import {
  ADD,
  EDIT,
  ModalType
} from "../../../containers/Admin/Main/AdminMainContainer";
import { stateType } from "../../../modules/reducer";
import {
  ReqCreateSchedule,
  ReqEditSchedule
} from "../../../lib/api/payloads/Main";
import { toast } from "react-toastify";
import { padNum } from "../../../lib/utils";

interface Props {
  type: ModalType;
  handleCloseModal?: () => void;
  createSchedule: (createData: ReqCreateSchedule) => Promise<void>;
  editSchedule: (
    editData: ReqEditSchedule,
    schedulerDate: Date
  ) => Promise<void>;
}

const ScheduleModal: FC<Props> = ({
  type,
  handleCloseModal,
  createSchedule,
  editSchedule
}): ReactElement => {
  const { schedulerDate, targetUuid, schedules } = useSelector(
    (state: stateType) => state.main
  );
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [detail, setDetail] = useState<string>("");

  const getLocalDate = useCallback((date: Date) => {
    const y = date.getFullYear();
    const m = padNum(date.getMonth() + 1);
    const d = padNum(date.getDate());
    return `${y}-${m}-${d}`;
  }, []);

  const handleCreateSchedule = () => {
    if (start === "" || end === "" || detail.trim() === "") {
      toast.error("입력 칸을 모두 채워주세요.");
      return;
    }
    if (start > end) {
      toast.error("시작 날이 종료 날보다 작아야 합니다.");
      return;
    }

    createSchedule({ schedulerDate, start, end, detail });
    handleCloseModal();
  };

  const handleEditSchedule = () => {
    const editData = {
      scheduleUuid: targetUuid,
      startDate: +new Date(start) / 1000,
      endDate: +new Date(end) / 1000,
      detail
    };

    editSchedule(editData, schedulerDate);
    handleCloseModal();
  };

  useEffect(() => {
    if (type === EDIT) {
      const target = schedules.find(({ schedule_uuid: u }) => u === targetUuid);
      setStart(getLocalDate(new Date(target.start_date)));
      setEnd(getLocalDate(new Date(target.end_date)));
      setDetail(target.detail);
    }
  }, [type]);

  return (
    <>
      <S.ScheduleModalWrap>
        <S.ScheduleModalClose
          src={OutingClose}
          alt="close"
          title="close"
          onClick={handleCloseModal}
        />
        <S.ScheduleModalTitle>
          {type === ADD ? "일정 추가" : "일정 수정"}
        </S.ScheduleModalTitle>
        <S.ScheduleModalForm>
          <S.ScheduleModalFormTimes>
            <S.ScheduleModalFormTitle>기간</S.ScheduleModalFormTitle>
            <S.ScheduleModalFormInnerWrap>
              <S.ScheduleModalFormInput
                type="date"
                placeholder="시작일을 선택해 주세요."
                defaultValue={start}
                onChange={e => {
                  setStart(e.currentTarget.value);
                }}
              />
              <S.ScheduleModalFormTilde>~</S.ScheduleModalFormTilde>
              <S.ScheduleModalFormInput
                type="date"
                placeholder="종료일을 선택해 주세요."
                defaultValue={end}
                onChange={e => {
                  setEnd(e.currentTarget.value);
                }}
              />
            </S.ScheduleModalFormInnerWrap>
          </S.ScheduleModalFormTimes>
          <S.ScheduleModalFormDetail>
            <S.ScheduleModalFormTitle>일정 내용</S.ScheduleModalFormTitle>
            <S.ScheduleModalFormInnerWrap>
              <S.ScheduleModalFormInput
                type="text"
                placeholder="세부 내용을 입력해주세요"
                onChange={e => {
                  setDetail(e.currentTarget.value);
                }}
                value={detail}
              />
            </S.ScheduleModalFormInnerWrap>
          </S.ScheduleModalFormDetail>
          <S.ScheduleModalFormButtonWrap>
            <S.ScheduleModalButton onClick={handleCloseModal}>
              취소
            </S.ScheduleModalButton>
            <S.ScheduleModalButton
              onClick={type === ADD ? handleCreateSchedule : handleEditSchedule}
            >
              {type === ADD ? "추가" : "수정"}
            </S.ScheduleModalButton>
          </S.ScheduleModalFormButtonWrap>
        </S.ScheduleModalForm>
        <S.ScheduleModalCircleBackWrap>
          <CircleBack />
        </S.ScheduleModalCircleBackWrap>
      </S.ScheduleModalWrap>
      <S.ScheduleModalDarkBack onClick={handleCloseModal} />
    </>
  );
};

export default ScheduleModal;
