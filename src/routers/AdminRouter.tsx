import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { PageNotFound } from "../components";
import {
  AdminOutingCertifiedListContainer,
  AdminOutingNowListContainer,
  AdminOutingWaitListContainer,
  AdminMainContainer,
  AdminNoticeAllListContainer,
  AdminNoticeAllDetailContainer,
  AdminNoticeMineContainer,
  AdminNoticeWritingContainer,
  LoginContainer,
  PasswordChangeContainer,
  AdminOutingDoneContainer,
  AdminNoticeMineDetailContainer,
  AdminNoticeEditContainer
} from "../containers";
import { GlobalInnerBody } from "../GlobalStyle";
import { TEACHER } from "../modules/action/header";
import { stateType } from "../modules/reducer";

const AdminRouter: FC = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const needWhite: string[] = ["out", "notice"];
  const { type } = useSelector((state: stateType) => state.header);

  useEffect(() => {
    if (!(type === TEACHER || localStorage.getItem("sms-type") === TEACHER)) {
      toast.info("로그인 후 이용해주세요.");
      history.push("/login");
    }
  }, []);

  return (
    <GlobalInnerBody
      isBackNeed={needWhite.some(path => pathname.includes(path))}
    >
      <Switch>
        <Route exact path="/" component={AdminMainContainer} />
        <Route exact path="/pw-change" component={PasswordChangeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route
          exact
          path="/out/wait"
          component={AdminOutingWaitListContainer}
        />
        <Route exact path="/out/now" component={AdminOutingNowListContainer} />
        <Route exact path="/out/done" component={AdminOutingDoneContainer} />
        <Route
          exact
          path="/out/certified"
          component={AdminOutingCertifiedListContainer}
        />
        <Route
          exact
          path="/notice/all"
          component={AdminNoticeAllListContainer}
        />
        <Route
          exact
          path="/notice/all/:id"
          component={AdminNoticeAllDetailContainer}
        />
        <Route exact path="/notice/mine" component={AdminNoticeMineContainer} />
        <Route
          exact
          path="/notice/edit/:id"
          component={AdminNoticeEditContainer}
        />
        <Route
          exact
          path="/notice/mine/:id"
          component={AdminNoticeMineDetailContainer}
        />
        <Route
          exact
          path="/notice/writing"
          component={AdminNoticeWritingContainer}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default AdminRouter;
