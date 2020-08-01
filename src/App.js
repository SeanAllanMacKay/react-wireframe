import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { ScreenProvider } from '@contexts/ScreenContext';

import Header from '@components/Header';
import Button from '@components/Button';

export default () => {
  const history = useHistory();

  return (
    <ScreenProvider>
      <Header />
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
    </ScreenProvider>
  );
};
