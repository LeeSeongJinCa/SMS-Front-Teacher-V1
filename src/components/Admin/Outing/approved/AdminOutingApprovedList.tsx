import React, { FC } from "react";

import { OutingStatus } from "../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../default";

const AdminOutingApprovedList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["선생님 승인"]}
      title="승인된 외출증"
      isClicked={() => {}}
    />
  );
};

export default AdminOutingApprovedList;
