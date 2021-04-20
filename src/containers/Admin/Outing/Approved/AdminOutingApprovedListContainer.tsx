import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AdminOutingApprovedList } from "../../../../components";
import { setOutingCardList } from "../../../../modules/action/outingCard";

const AdminOutingApprovedListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
  }, []);

  return <AdminOutingApprovedList />;
};

export default AdminOutingApprovedListContainer;
