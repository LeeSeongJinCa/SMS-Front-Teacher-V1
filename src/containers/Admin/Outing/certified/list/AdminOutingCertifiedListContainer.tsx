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
  }, []);

  return <AdminOutingCertifiedList />;
};

export default AdminOutingCertifiedListContainer;
