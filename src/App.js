import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { ScreenProvider } from '@contexts/ScreenContext';

import Header from '@components/Header';
import Button from '@components/Button';

import Routes from '@routes';

export default () => {
  const history = useHistory();

  return (
    <ScreenProvider>
      <Header />
      <div style={{ height: 'calc(100vh - 54px)', display: 'flex' }}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Button onClick={() => history.push('/login')}>login</Button>
              );
            }}
          />

          {Object.entries(Routes).map(([path, page]) => (
            <Route key={path} exact path={`/${path}`} render={page} />
          ))}
        </Switch>
      </div>
    </ScreenProvider>
  );
};
