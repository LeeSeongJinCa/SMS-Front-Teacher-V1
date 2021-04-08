import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import AdminOutingCardWaitList from "../../../../../components/Admin/Outing/Wait/List/AdminOutingCardWaitList";
import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import {
  getOutingCardListSaga,
  setOutingCardList
} from "../../../../../modules/action/outingCard";

const AdminOutingWaitListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
  }, []);

  return <AdminOutingCardWaitList />;
};

export default AdminOutingWaitListContainer;
