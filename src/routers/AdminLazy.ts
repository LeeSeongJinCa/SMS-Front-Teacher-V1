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
      /* webpackChunkName: "home" */ "../containers/Admin/Main/AdminMainContainer"
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
