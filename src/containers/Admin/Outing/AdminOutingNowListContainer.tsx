import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AdminOutingNowList } from "../../../components";
import { setOutingCardList } from "../../../modules/action/outingCard";

const AdminOutingNowListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
  }, []);

  return <AdminOutingNowList />;
};

export default AdminOutingNowListContainer;
