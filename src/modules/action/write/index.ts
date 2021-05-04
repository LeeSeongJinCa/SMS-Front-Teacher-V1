import { BoardWrite } from "../../../lib/api/payloads/Board";

const WRITE_NOTICE_SAGA = "write/WRITE_NOTICE_SAGA" as const;

const writeNoticeSaga = (payload: BoardWrite) => ({
  type: WRITE_NOTICE_SAGA,
  payload
});

type WriteAction = ReturnType<typeof writeNoticeSaga>;

export const writeAction = {
  WRITE_NOTICE_SAGA
};

export const writeActionCreator = {
  writeNoticeSaga
};

export default WriteAction;
