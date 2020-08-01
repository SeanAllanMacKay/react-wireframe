import React from 'react';
import { test } from './styles.scss';

export default ({ onClick, children, tooltip, popover, disabled, variant }) => (
  <button onClick={onClick} disabled={disabled} className={test}>
    {children}
  </button>
);
