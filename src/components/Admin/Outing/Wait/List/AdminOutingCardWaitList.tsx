import React, { useCallback, FC } from "react";
import { useDispatch } from "react-redux";

import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { ShowOutingCardModal } from "../../../../../modules/action/outingCard";
import { OutingCardPage } from "../../../../default";

const AdminOutingCardWaitList: FC = () => {
  const dispatch = useDispatch();

  const clickHandler = useCallback((outing_uuid: string) => {
    dispatch(ShowOutingCardModal(outing_uuid));
  }, []);

  return (
    <OutingCardPage
      status={OutingStatus["학부모 승인"]}
      title="승인대기 외출증"
      isClicked={clickHandler}
    />
  );
};

export default AdminOutingCardWaitList;
