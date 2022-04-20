import React from 'react';
import './textArea.css';
import classNames from 'classnames';

function TextArea({ className, ...rest }) {
  const classes = classNames('text-area', className);
  return <textarea className={classes} {...rest}></textarea>;
}

export default TextArea;
