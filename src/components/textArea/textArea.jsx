import React from 'react';
import './textArea.css';
import classNames from 'classnames';

const TextArea = React.forwardRef(({ className, ...rest }, ref) => {
  const classes = classNames('text-area', className);
  return <textarea ref={ref} className={classes} {...rest}></textarea>;
});

export default TextArea;
