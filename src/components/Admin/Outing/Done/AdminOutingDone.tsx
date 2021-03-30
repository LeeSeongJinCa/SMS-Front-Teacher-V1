import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import Confirm from "../../../../lib/confirm/confirm";
import { finishOutingCardSaga } from "../../../../modules/action/outingCard";
import { OutingCardPage } from "../../../default";

const AdminOutingCertifiedList: FC = () => {
  const dispatch = useDispatch();
  const clickHandler = useCallback(async (uuid: string) => {
    const confirm = await Confirm.confirm([
      "외출이 종료된 학생의 외출증을 최종 확인하겠습니까?",
      "취소",
      "확인"
    ]);

    if (confirm) {
      dispatch(finishOutingCardSaga(uuid));
    }
  }, []);

  return (
    <OutingCardPage
      status={OutingStatus["외출 종료"]}
      title="최종 확인 대기 외출증"
      isClicked={clickHandler}
    />
  );
};

export default AdminOutingCertifiedList;
