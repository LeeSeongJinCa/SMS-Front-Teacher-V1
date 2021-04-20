import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AdminOutingCertifiedList } from "../../../../components";
import { setOutingCardList } from "../../../../modules/action/outingCard";

const AdminOutingApprovedListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOutingCardList([]));
  }, []);

  return <AdminOutingCertifiedList />;
};

export default AdminOutingApprovedListContainer;
