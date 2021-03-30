import React, { FC } from "react";
import { CircleWantedList } from "../../../../components";
import { useEffect } from "react";
import { getWantedInfoListSaga } from "../../../../modules/action/poster";
import { useDispatch } from "react-redux";
import { getRecruitMentList } from "../../../../modules/action/recruitment/list";

const CircleWantedContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getWantedInfoListSaga());
    dispatch(getRecruitMentList());
  }, []);
  return <CircleWantedList />;
};

export default CircleWantedContainer;
