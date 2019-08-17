import React from 'react';

import useScreenSize from './hooks/useScreenSize'
import { ScreenProvider } from './context/ScreenContext'

import Site from './pages'
import Header from './components/Header'
import Social from './components/Social'

export default () => {
  const [screenSize] = useScreenSize();
  return (
    <ScreenProvider value={screenSize}>
      <Header />
      <Social />
      <div
        style={{
          paddingTop: screenSize.small ? '30px' : '48px'
        }}
      >
        <Site />
      </div>
    </ScreenProvider>
  );
};
