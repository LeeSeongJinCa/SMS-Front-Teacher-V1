import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import {
  LazyMain,
  LazyPassword,
  LazyAccount,
  LazyLogin,
  LazyMyPage,
  LazyPageNotFound
} from "./AdminLazy";

const AdminRouter: FC = () => {
  return (
    <Switch>
      <Route path="/pw-change" component={LazyPassword} />
      <Route path="/account" component={LazyAccount} />
      <Route path="/login" component={LazyLogin} />
      <Route path="/user" component={LazyMyPage} />
      <Route path="/" component={LazyMain} />
      <Route path="*" component={LazyPageNotFound} />
    </Switch>
  );
};

export default AdminRouter;
