import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  headerContainer,
  headerText,
  headerNavigation,
  headerList,
  headerLink,
} from './styles.scss';

import ScreenContext from '@contexts/ScreenContext';

const links = [{ title: 'Test', url: '/test' }];

export default () => {
  const location = useLocation();
  const { width } = useContext(ScreenContext);

  const active = location?.pathname;

  return (
    <header className={headerContainer}>
      <h1 className={headerText}>Constructable</h1>
      <nav className={headerNavigation}>
        <ul className={headerList}>
          {links.map(({ title, url }, index) => (
            <li key={`${title}-${index}`}>
              <Link className={headerLink} to={url}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
