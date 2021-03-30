import React, { FC, memo } from "react";
import NavigationMain from "./Main/NavigationMain";
import * as S from "./styles";
import NavigationSub from "./Sub/NavigationSub";
import { Route, Switch } from "react-router";
import { adminRouter, subNavRouter } from "../../lib/static";

const Navigation: FC = () => {
  return (
    <S.Container>
      <Switch>
        <Route
          path="/"
          render={() => {
            return <NavigationMain routeData={adminRouter} />;
          }}
        />
      </Switch>
      <NavigationSub subRouteData={subNavRouter} />
    </S.Container>
  );
};

export default memo(Navigation);
