import React, { FC, useEffect, useState } from "react";
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
import OutingTutorial from "../../components/Admin/Outing/tutorial/OutingTutorial";
import { TutorialProvider } from "../../lib/contextAPI/tutorial";

const OutingRouter: FC = () => {
  const [tutorial, setTutorial] = useState<boolean>(false);

  const endTutorial = () => {
    setTutorial(false);
    localStorage.setItem("taught", "true");
  };

  useEffect(() => {
    if (!localStorage.getItem("taught")) {
      setTutorial(true);
    }
  }, []);

  return (
    <TutorialProvider>
      <GlobalInnerBody>
        {tutorial && <OutingTutorial endTutorial={endTutorial} />}
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
    </TutorialProvider>
  );
};

export default OutingRouter;
