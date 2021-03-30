import {
  ReqBoardDelete,
  ReqBoardEdit,
  ReqBoardWrite,
  ResBoardDetail
} from "../../../../lib/api/payloads/Board";

export const GET_NOTICE_DETAIL = "notice/GET_NOTICE_DETAIL" as const;
export const GET_NOTICE_DETAIL_SUCCESS = "notice/GET_NOTICE_DETAIL_SUCCESS" as const;
export const GET_NOTICE_DETAIL_FAIL = "notice/GET_NOTICE_DETAIL_FAIL" as const;

export const EDIT_NOTICE = "notice/EDIT_NOTICE" as const;
export const DELETE_NOTICE = "notice/DELETE_NOTICE" as const;
export const WRITE_NOTICE = "notice/WRITE_NOTICE" as const;

export const getNoticeDetail = (uuid: string) => ({
  type: GET_NOTICE_DETAIL,
  payload: uuid
});
export const getNoticeDetailSuccess = (data: ResBoardDetail) => ({
  type: GET_NOTICE_DETAIL_SUCCESS,
  payload: data
});
export const getNoticeDetailFail = () => ({
  type: GET_NOTICE_DETAIL_FAIL
});

export const editNotice = (payload: ReqBoardEdit) => ({
  type: EDIT_NOTICE,
  payload
});

export const deleteNotice = (payload: ReqBoardDelete) => ({
  type: DELETE_NOTICE,
  payload
});

export const writeNotice = (payload: ReqBoardWrite) => ({
  type: WRITE_NOTICE,
  payload
});

type NoticeDetailAction = ReturnType<
  typeof getNoticeDetailSuccess | typeof getNoticeDetailFail
>;

export default NoticeDetailAction;
