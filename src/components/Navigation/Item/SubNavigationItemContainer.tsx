import React, { FC, useCallback, memo } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import NavigationItem from "./NavigationItem";

import { changeSubNavOpen } from "../../../modules/action/subNav";

interface Props {
  src: string;
  name: string;
  route: string;
  isActive: boolean;
}

const SubNavigationItemContainer: FC<Props> = ({
  src,
  name,
  route,
  isActive
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (history.location.pathname === route) {
      dispatch(changeSubNavOpen());
    }
  }, [dispatch, route]);

  return (
    <NavigationItem
      src={src}
      name={name}
      route={route}
      isActive={isActive}
      onClick={onClick}
    />
  );
};

export default memo(SubNavigationItemContainer);
