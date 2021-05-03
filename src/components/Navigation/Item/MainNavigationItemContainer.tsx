import React, { FC, memo } from "react";

import NavigationItem from "./NavigationItem";

interface Props {
  src: string;
  name: string;
  route: string;
  isActive: boolean;
}

const MainNavigationItemContainer: FC<Props> = ({
  src,
  name,
  route,
  isActive
}) => {
  return (
    <NavigationItem
      src={src}
      name={name}
      route={route}
      isActive={isActive}
      onClick={void {}}
    />
  );
};

export default memo(MainNavigationItemContainer);
