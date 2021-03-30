import React, { FC, useEffect } from "react";
import { CircleAll } from "../../../components";
import { useDispatch } from "react-redux";
import { getClubList } from "../../../modules/action/club/list";

const CircleAllContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubList());
  }, []);
  return <CircleAll />;
};

export default CircleAllContainer;
