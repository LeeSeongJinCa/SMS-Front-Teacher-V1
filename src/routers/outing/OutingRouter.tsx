import React, { FC, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import useCustomSelector from "../../lib/hooks/useCustomSelector";
import { setTutorial } from "../../modules/action/page";

const OutingRouter: FC = () => {
  const dispatch = useDispatch();
  const isTutorialOpen = useCustomSelector().page.isTutorialOpen;

  const startTutorial = () => {
    dispatch(setTutorial(true));
  };

  const endTutorial = () => {
    dispatch(setTutorial(false));
    localStorage.setItem("taught", "true");
  };

  useEffect(() => {
    if (!localStorage.getItem("taught")) {
      startTutorial();
    }
  }, []);

  return (
    <TutorialProvider>
      <GlobalInnerBody>
        {isTutorialOpen && <OutingTutorial endTutorial={endTutorial} />}
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
