import React, { FC, ReactElement, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { AdminMain } from "../../../components";
import {
  deleteSchedules,
  patchSchedules,
  postSchedules
} from "../../../lib/api/Main";
import {
  ReqCreateSchedule,
  ReqEditSchedule
} from "../../../lib/api/payloads/Main";
import { getSchedulesSaga } from "../../../modules/action/main";

interface Props {}

export const ADD = "add" as const;
export const EDIT = "edit" as const;
export const DELETE = "delete" as const;
export type ModalType = typeof ADD | typeof EDIT | typeof DELETE;

const AdminMainContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const checkOverHundredWord = useCallback((detail: string) => {
    if (detail.length > 100) {
      toast.error("일정 내용은 100자 이하여야 합니다.");
      return true;
    }
    return false;
  }, []);

  const createSchedule = useCallback(
    async ({ start, end, detail, schedulerDate }: ReqCreateSchedule) => {
      const startDate = new Date(start);
      const endDate = new Date(end);

      if (checkOverHundredWord(detail)) {
        return;
      }

      try {
        await postSchedules(
          Math.floor(+startDate / 1000),
          Math.floor(+endDate / 1000),
          detail
        );

        dispatch(
          getSchedulesSaga(
            schedulerDate.getFullYear(),
            schedulerDate.getMonth() + 1
          )
        );
      } catch {}
    },
    []
  );

  const editSchedule = useCallback(
    async (editData: ReqEditSchedule, schedulerDate: Date) => {
      if (checkOverHundredWord(editData.detail)) {
        return;
      }

      try {
        await patchSchedules(editData);

        dispatch(
          getSchedulesSaga(
            schedulerDate.getFullYear(),
            schedulerDate.getMonth() + 1
          )
        );
      } catch {}
    },
    []
  );

  const removeSchedule = useCallback(
    async (scheduleUuid: string, schedulerDate: Date) => {
      try {
        await deleteSchedules(scheduleUuid);

        dispatch(
          getSchedulesSaga(
            schedulerDate.getFullYear(),
            schedulerDate.getMonth() + 1
          )
        );
      } catch {}
    },
    []
  );

  const handleShowAdd = useCallback(() => {
    setModal(true);
    setModalType(ADD);
  }, []);

  const handleShowEdit = useCallback(() => {
    setModal(true);
    setModalType(EDIT);
  }, []);

  const handleShowDelete = useCallback(() => {
    setModal(true);
    setModalType(DELETE);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
    setModalType(null);
  }, []);

  return (
    <AdminMain
      modal={modal}
      modalType={modalType}
      handleShowAdd={handleShowAdd}
      handleShowEdit={handleShowEdit}
      handleShowDelete={handleShowDelete}
      handleCloseModal={handleCloseModal}
      createSchedule={createSchedule}
      editSchedule={editSchedule}
      removeSchedule={removeSchedule}
    />
  );
};

export default AdminMainContainer;
