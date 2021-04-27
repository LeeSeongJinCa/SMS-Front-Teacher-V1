import { lazy } from "react";

export const LazyNoticeAllList = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.all" */ "../../containers/Admin/Notice/all/AdminNoticeListContainer"
    )
);
export const LazyNoticeAllDetail = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.all.detail" */ "../../containers/Admin/Notice/all/AdminNoticeAllDetailContainer"
    )
);
export const LazyNoticeMine = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.mine" */ "../../containers/Admin/Notice/mine/AdminNoticeMineContainer"
    )
);
export const LazyNoticeMineDetail = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.mine.detail" */ "../../containers/Admin/Notice/mine/AdminNoticeMineDetailContainer"
    )
);
export const LazyNoticeWriting = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.writing" */ "../../containers/Admin/Notice/writing/AdminNoticeWritingContainer"
    )
);
export const LazyNoticeEdit = lazy(
  () =>
    import(
      /* webpackChunkName: "notice.edit" */ "../../containers/Admin/Notice/edit/AdminNoticeEditContainer"
    )
);
