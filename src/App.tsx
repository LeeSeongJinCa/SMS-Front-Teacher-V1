import React, { FC } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./lib/confirm/confirm.css";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { PageNotFound, Navigation } from "./components";
import { HeaderContainer } from "./containers";
import { AdminRouter } from "./routers";
import { history } from "./modules/store";

const App: FC<{}> = () => {
  return (
    <GlobalContainer>
      <GlobalStyle />
      <Router history={history}>
        <ToastContainer autoClose={2000} />
        <Navigation />
        <GlobalBody>
          <HeaderContainer />
          <Switch>
            <Route path="/*" component={AdminRouter} />
            <Redirect path="/" to="/home" />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </GlobalBody>
      </Router>
    </GlobalContainer>
  );
};

export default App;
