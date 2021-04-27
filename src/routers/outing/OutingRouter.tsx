import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import {
  LazyOutingCertified,
  LazyOutingNow,
  LazyOutingWait,
  LazyOutingDone,
  LazyOutingApproved,
  LazyOutingStatistics
} from "./OutingLazy";

import { LazyPageNotFound } from "../AdminLazy";
import { GlobalInnerBody } from "../../GlobalStyle";

const OutingRouter: FC = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route path="/out/wait" component={LazyOutingWait} />
        <Route path="/out/now" component={LazyOutingNow} />
        <Route path="/out/done" component={LazyOutingDone} />
        <Route path="/out/approved" component={LazyOutingApproved} />
        <Route path="/out/certified" component={LazyOutingCertified} />
        <Route path="/out/statistics" component={LazyOutingStatistics} />
        <Route path="*" component={LazyPageNotFound} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default OutingRouter;
