import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import Confirm from "../../../../lib/confirm/confirm";
import { teacherFinishOutingCardSaga } from "../../../../modules/action/outingCard";
import { OutingCardPage } from "../../../default";

const AdminOutingNowList: FC = () => {
  const dispatch = useDispatch();

  const clickHandler = useCallback(async (uuid: string) => {
    const bool = await Confirm.confirm([
      "정말 외출을 종료 하시겠습니까?",
      "취소",
      "종료"
    ]);

    if (!bool) return;
    dispatch(teacherFinishOutingCardSaga(uuid));
  }, []);

  return (
    <OutingCardPage
      status={OutingStatus["외출 시작"]}
      title="현재 외출 학생"
      isClicked={clickHandler}
    />
  );
};

export default AdminOutingNowList;
