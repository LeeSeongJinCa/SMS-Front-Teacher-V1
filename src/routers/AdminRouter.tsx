import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import {
  LazyMain,
  LazyPassword,
  LazyAccount,
  LazyLogin,
  LazyMyPage
} from "./AdminLazy";

const AdminRouter: FC = () => {
  return (
    <Switch>
      <Route path="/pw-change" component={LazyPassword} />
      <Route path="/account" component={LazyAccount} />
      <Route path="/login" component={LazyLogin} />
      <Route path="/user" component={LazyMyPage} />
      <Route path="/" component={LazyMain} />
    </Switch>
  );
};

export default AdminRouter;
