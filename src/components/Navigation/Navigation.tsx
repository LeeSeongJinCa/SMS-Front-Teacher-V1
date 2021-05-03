import React, { FC, memo } from "react";
import { Route, Switch } from "react-router";

import * as S from "./styles";
import NavigationMain from "./Main/NavigationMain";
import NavigationSub from "./Sub/NavigationSub";

import { adminRouter, subNavRouter } from "../../lib/static";

const Navigation: FC = () => {
  return (
    <S.Container>
      <Switch>
        <Route
          path="/"
          render={() => <NavigationMain routeData={adminRouter} />}
        />
      </Switch>
      <NavigationSub subRouteData={subNavRouter} />
    </S.Container>
  );
};

export default memo(Navigation);
