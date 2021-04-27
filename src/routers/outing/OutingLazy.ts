import { lazy } from "react";

export const LazyOutingCertified = lazy(
  () =>
    import(
      /* webpackChunkName: "out.certified" */ "../../containers/Admin/Outing/AdminOutingCertifiedContainer"
    )
);

export const LazyOutingNow = lazy(
  () =>
    import(
      /* webpackChunkName: "out.now" */ "../../containers/Admin/Outing/AdminOutingNowListContainer"
    )
);
export const LazyOutingWait = lazy(
  () =>
    import(
      /* webpackChunkName: "out.wait" */ "../../containers/Admin/Outing/AdminOutingWaitListContainer"
    )
);
export const LazyOutingDone = lazy(
  () =>
    import(
      /* webpackChunkName: "out.done" */ "../../containers/Admin/Outing/AdminOutingDoneConatiner"
    )
);
export const LazyOutingApproved = lazy(
  () =>
    import(
      /* webpackChunkName: "out.approved" */ "../../containers/Admin/Outing/AdminOutingApprovedContainer"
    )
);
export const LazyOutingStatistics = lazy(
  () =>
    import(
      /* webpackChunkName: "out.statistics" */ "../../components/Admin/Outing/statistics"
    )
);
