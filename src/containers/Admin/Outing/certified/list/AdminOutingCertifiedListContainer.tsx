import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AdminOutingCertifiedList } from "../../../../../components";
import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import {
  getOutingCardListSaga,
  setOutingCardList
} from "../../../../../modules/action/outingCard";

const AdminOutingCertifiedListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
    dispatch(
      getOutingCardListSaga({
        status: OutingStatus["외출 인증 승인"]
      })
    );
  }, []);

  return <AdminOutingCertifiedList />;
};

export default AdminOutingCertifiedListContainer;
