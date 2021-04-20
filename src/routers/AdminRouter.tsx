import React, { FC } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import {
  LazyMain,
  LazyPassword,
  LazyAccount,
  LazyOutingCertified,
  LazyOutingNow,
  LazyOutingWait,
  LazyOutingDone,
  LazyOutingApproved,
  LazyOutingStatistics,
  LazyNoticeAllList,
  LazyNoticeAllDetail,
  LazyNoticeMine,
  LazyNoticeMineDetail,
  LazyNoticeWriting,
  LazyNoticeEdit,
  LazyLogin,
  LazyMyPage,
  LazyPageNotFound
} from "./AdminLazy";

import { GlobalInnerBody } from "../GlobalStyle";

const AdminRouter: FC = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const needWhite: string[] = ["out", "notice"];

  return (
    <GlobalInnerBody
      isBackNeed={needWhite.some(path => pathname.includes(path))}
    >
      <Switch>
        <Route exact path="/" component={LazyMain} />
        <Route exact path="/pw-change" component={LazyPassword} />
        <Route exact path="/account" component={LazyAccount} />
        <Route exact path="/login" component={LazyLogin} />
        <Route exact path="/user" component={LazyMyPage} />
        <Route exact path="/out/wait" component={LazyOutingWait} />
        <Route exact path="/out/now" component={LazyOutingNow} />
        <Route exact path="/out/done" component={LazyOutingDone} />
        <Route exact path="/out/approved" component={LazyOutingApproved} />
        <Route exact path="/out/certified" component={LazyOutingCertified} />
        <Route exact path="/out/statistics" component={LazyOutingStatistics} />
        <Route exact path="/notice/all" component={LazyNoticeAllList} />
        <Route exact path="/notice/all/:id" component={LazyNoticeAllDetail} />
        <Route exact path="/notice/mine" component={LazyNoticeMine} />
        <Route exact path="/notice/edit/:id" component={LazyNoticeEdit} />
        <Route exact path="/notice/mine/:id" component={LazyNoticeMineDetail} />
        <Route exact path="/notice/writing" component={LazyNoticeWriting} />
        <Route path="*" component={LazyPageNotFound} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default AdminRouter;
