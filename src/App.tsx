import React, { FC, Suspense, useEffect } from "react";
import { Switch, Router, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./lib/confirm/confirm.css";
import Channel from "./lib/channel.js";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { Navigation, Header, Banner, Loading } from "./components";
import { AdminRouter, OutingRouter, NoticeRouter } from "./routers";
import { history } from "./modules/store";

const App: FC<{}> = () => {
  useEffect(() => {
    Channel(process.env.CHANNEL_PLUGIN_KEY);
  }, []);

  return (
    <GlobalContainer>
      <GlobalStyle />
      <Router history={history}>
        <ToastContainer autoClose={2000} />
        <Navigation />
        <GlobalBody>
          <Header />
          <Banner />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/notice" component={NoticeRouter} />
              <Route path="/out" component={OutingRouter} />
              <Route path="/" component={AdminRouter} />
            </Switch>
          </Suspense>
        </GlobalBody>
      </Router>
    </GlobalContainer>
  );
};

export default App;
