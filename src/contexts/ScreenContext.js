import React, { useEffect, useState, createContext } from 'react';

const ScreenContext = createContext({});

export default ScreenContext;

export const ScreenProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ height, width }}>
      {children}
    </ScreenContext.Provider>
  );
};
