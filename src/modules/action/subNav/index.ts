export const CHANGE_SUB_NAV_OPEN = "SUBNAV_CHANGE_SUV_NAV_OPEN" as const;

export const changeSubNavOpen = () => ({
  type: CHANGE_SUB_NAV_OPEN
});

export type SubNavAction = ReturnType<typeof changeSubNavOpen>;
