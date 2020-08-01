import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Button from '@components/Button';

export default () => {
  const history = useHistory();

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Button onClick={() => history.push('/test')}>Test</Button>;
        }}
      />

      <Route
        exact
        path="/test"
        render={() => {
          return <Button onClick={() => history.goBack()}>Test</Button>;
        }}
      />
    </Switch>
  );
};
