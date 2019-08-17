import React from 'react';

const ScreenContext = React.createContext()

export const ScreenProvider = ScreenContext.Provider;
export const ScreenConsumer = ScreenContext.Consumer;
export default ScreenContext;