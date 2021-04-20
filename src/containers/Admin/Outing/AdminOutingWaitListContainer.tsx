import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import AdminOutingCardWaitList from "../../../components/Admin/Outing/wait/AdminOutingCardWaitList";
import { setOutingCardList } from "../../../modules/action/outingCard";

const AdminOutingWaitListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
  }, []);

  return <AdminOutingCardWaitList />;
};

export default AdminOutingWaitListContainer;
