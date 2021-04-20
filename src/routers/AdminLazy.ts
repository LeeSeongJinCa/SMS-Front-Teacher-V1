import { lazy } from "react";

export const LazyMyPage = lazy(() => import("../components/MyPage/MyPage"));

export const LazyLogin = lazy(() => import("../components/Login/Login"));

export const LazyMain = lazy(
  () => import("../containers/Admin/Main/AdminMainContainer")
);

export const LazyPassword = lazy(
  () => import("../containers/PasswordChange/PasswordChangeContainer")
);

export const LazyAccount = lazy(
  () => import("../containers/Account/AccountContainer")
);

export const LazyPageNotFound = lazy(
  () => import("../components/default/NotFound/NotFound")
);

export const LazyOutingCertified = lazy(
  () => import("../containers/Admin/Outing/AdminOutingCertifiedContainer")
);

export const LazyOutingNow = lazy(
  () => import("../containers/Admin/Outing/AdminOutingNowListContainer")
);
export const LazyOutingWait = lazy(
  () => import("../containers/Admin/Outing/AdminOutingWaitListContainer")
);
export const LazyOutingDone = lazy(
  () => import("../containers/Admin/Outing/AdminOutingDoneConatiner")
);
export const LazyOutingApproved = lazy(
  () => import("../containers/Admin/Outing/AdminOutingApprovedContainer")
);
export const LazyOutingStatistics = lazy(
  () => import("../components/Admin/Outing/statistics")
);

export const LazyNoticeAllList = lazy(
  () => import("../containers/Admin/Notice/all/AdminNoticeListContainer")
);
export const LazyNoticeAllDetail = lazy(
  () => import("../containers/Admin/Notice/all/AdminNoticeAllDetailContainer")
);
export const LazyNoticeMine = lazy(
  () => import("../containers/Admin/Notice/mine/AdminNoticeMineContainer")
);
export const LazyNoticeMineDetail = lazy(
  () => import("../containers/Admin/Notice/mine/AdminNoticeMineDetailContainer")
);
export const LazyNoticeWriting = lazy(
  () => import("../containers/Admin/Notice/writing/AdminNoticeWritingContainer")
);
export const LazyNoticeEdit = lazy(
  () => import("../containers/Admin/Notice/edit/AdminNoticeEditContainer")
);
