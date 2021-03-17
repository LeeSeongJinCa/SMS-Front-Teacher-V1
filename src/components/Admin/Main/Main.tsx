import React, { FC, ReactElement, useState } from "react";

import * as S from "./style";
import ScheduleModal from "./ScheduleModal";
import DeleteScheduleModal from "./DeleteScheduleModal";

import * as MainS from "../../../components/Main/style";
import Schedule from "../../Main/Schedule/Schedule";
import ScheduleDetail from "../../Main/ScheduleDetail/ScheduleDetail";
import {
  ADD,
  EDIT,
  ModalType
} from "../../../containers/Admin/Main/AdminMainContainer";
import {
  ReqCreateSchedule,
  ReqEditSchedule
} from "../../../lib/api/payloads/Main";

interface Props {
  modal: boolean;
  modalType: ModalType;
  handleShowAdd: () => void;
  handleShowEdit: () => void;
  handleShowDelete: () => void;
  handleCloseModal: () => void;
  createSchedule: (createData: ReqCreateSchedule) => Promise<void>;
  editSchedule: (
    editData: ReqEditSchedule,
    schedulerDate: Date
  ) => Promise<void>;
  removeSchedule: (scheduleUuid: string, schedulerDate: Date) => Promise<void>;
}

const AdminMain: FC<Props> = ({
  modal,
  modalType,
  handleShowAdd,
  handleShowEdit,
  handleShowDelete,
  handleCloseModal,
  createSchedule,
  editSchedule,
  removeSchedule
}): ReactElement => {
  return (
    <S.AdminMainWrap>
      <MainS.MainLeft>
        <Schedule />
      </MainS.MainLeft>
      <MainS.MainRight>
        <ScheduleDetail
          handleShowAdd={handleShowAdd}
          handleShowEdit={handleShowEdit}
          handleShowDelete={handleShowDelete}
        />
      </MainS.MainRight>
      {modal &&
        (modalType === ADD || modalType === EDIT ? (
          <ScheduleModal
            type={modalType}
            handleCloseModal={handleCloseModal}
            createSchedule={createSchedule}
            editSchedule={editSchedule}
          />
        ) : (
          <DeleteScheduleModal
            handleCloseModal={handleCloseModal}
            removeSchedule={removeSchedule}
          />
        ))}
    </S.AdminMainWrap>
  );
};

export default AdminMain;
