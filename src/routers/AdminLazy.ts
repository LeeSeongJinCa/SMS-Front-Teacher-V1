import { lazy } from "react";

export const LazyMyPage = lazy(
  () => import(/* webpackChunkName: "my-page" */ "../components/MyPage/MyPage")
);

export const LazyLogin = lazy(
  () => import(/* webpackChunkName: "login" */ "../components/Login/Login")
);

export const LazyMain = lazy(
  () =>
    import(
      /* webpackChunkName: "out.wait" */ "../containers/Admin/Main/AdminMainContainer"
    )
);

export const LazyPassword = lazy(
  () =>
    import(
      /* webpackChunkName: "password-change" */ "../containers/PasswordChange/PasswordChangeContainer"
    )
);

export const LazyAccount = lazy(
  () =>
    import(
      /* webpackChunkName: "account" */ "../containers/Account/AccountContainer"
    )
);

export const LazyPageNotFound = lazy(
  () =>
    import(
      /* webpackChunkName: "page-not-found" */ "../components/default/NotFound/NotFound"
    )
);

export const LazyOutingCertified = lazy(
  () =>
    import(
      /* webpackChunkName: "out.certified" */ "../containers/Admin/Outing/AdminOutingCertifiedContainer"
    )
);

export const LazyOutingNow = lazy(
  () =>
    import(
      /* webpackChunkName: "out.now" */ "../containers/Admin/Outing/AdminOutingNowListContainer"
    )
);
export const LazyOutingWait = lazy(
  () =>
    import(
      /* webpackChunkName: "out.wait" */ "../containers/Admin/Outing/AdminOutingWaitListContainer"
    )
);
export const LazyOutingDone = lazy(
  () =>
    import(
      /* webpackChunkName: "out.done" */ "../containers/Admin/Outing/AdminOutingDoneConatiner"
    )
);
export const LazyOutingApproved = lazy(
  () =>
    import(
      /* webpackChunkName: "out.approved" */ "../containers/Admin/Outing/AdminOutingApprovedContainer"
    )
);
export const LazyOutingStatistics = lazy(
  () =>
    import(
      /* webpackChunkName: "out.statistics" */ "../components/Admin/Outing/statistics"
    )
);

export const LazyNoticeAllList = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.all" */ "../containers/Admin/Notice/all/AdminNoticeListContainer"
    )
);
export const LazyNoticeAllDetail = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.all.detail" */ "../containers/Admin/Notice/all/AdminNoticeAllDetailContainer"
    )
);
export const LazyNoticeMine = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.mine" */ "../containers/Admin/Notice/mine/AdminNoticeMineContainer"
    )
);
export const LazyNoticeMineDetail = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.mine.detail" */ "../containers/Admin/Notice/mine/AdminNoticeMineDetailContainer"
    )
);
export const LazyNoticeWriting = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.writing" */ "../containers/Admin/Notice/writing/AdminNoticeWritingContainer"
    )
);
export const LazyNoticeEdit = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.edit" */ "../containers/Admin/Notice/edit/AdminNoticeEditContainer"
    )
);
