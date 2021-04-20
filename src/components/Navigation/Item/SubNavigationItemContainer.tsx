import React, { FC, useCallback, memo } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import NavigationItem from "./NavigationItem";

import { subPageMove } from "../../../modules/action/page";
import { changeSubNavOpen } from "../../../modules/action/subNav";

interface Props {
  name: string;
  isActive: boolean;
  src: string;
  route: string;
}

const SubNavigationItemContainer: FC<Props> = ({
  isActive,
  name,
  src,
  route
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (history.location.pathname === route) {
      dispatch(changeSubNavOpen());
      return;
    }

    dispatch(subPageMove(name));
    history.push(route);
  }, [dispatch, route]);

  return (
    <NavigationItem
      onClick={onClick}
      isActive={isActive}
      name={name}
      src={src}
    />
  );
};

export default memo(SubNavigationItemContainer);
