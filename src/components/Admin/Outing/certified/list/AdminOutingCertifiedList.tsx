import React, { FC } from "react";

import { OutingStatus } from "../../../../../lib/api/payloads/Outing";
import { OutingCardPage } from "../../../../default";

const AdminOutingCertifiedList: FC = () => {
  return (
    <OutingCardPage
      status={OutingStatus["외출 인증 승인"]}
      title="종료된 외출증"
      isClicked={() => {}}
    />
  );
};

export default AdminOutingCertifiedList;
