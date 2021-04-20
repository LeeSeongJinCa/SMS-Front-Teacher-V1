import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AdminOutingDone } from "../../../../components";
import { setOutingCardList } from "../../../../modules/action/outingCard";

const AdminOutingNowListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
  }, []);

  return <AdminOutingDone />;
};

export default AdminOutingNowListContainer;
