import React from 'react';
import './container.css';
import classNames from 'classnames';

function Container({ children, className }) {
  const classes = classNames('container', className);
  return <div className={classes}>{children}</div>;
}

export default Container;
