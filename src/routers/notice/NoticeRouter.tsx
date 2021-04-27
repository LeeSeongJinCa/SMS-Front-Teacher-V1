import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import {
  LazyNoticeAllList,
  LazyNoticeAllDetail,
  LazyNoticeMine,
  LazyNoticeMineDetail,
  LazyNoticeEdit,
  LazyNoticeWriting
} from "./NoticeLazy";

import { LazyPageNotFound } from "../AdminLazy";
import { GlobalInnerBody } from "../../GlobalStyle";

const NoticeRouter: FC = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route exact path="/notice/all" component={LazyNoticeAllList} />
        <Route exact path="/notice/all/:id" component={LazyNoticeAllDetail} />
        <Route exact path="/notice/mine" component={LazyNoticeMine} />
        <Route exact path="/notice/mine/:id" component={LazyNoticeMineDetail} />
        <Route exact path="/notice/edit/:id" component={LazyNoticeEdit} />
        <Route exact path="/notice/writing" component={LazyNoticeWriting} />
        <Route path="*" component={LazyPageNotFound} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default NoticeRouter;
