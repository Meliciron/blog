import React from 'react';
import './input.css';
import classNames from 'classnames';

const Input = React.forwardRef(
  ({ id, className, label, error, ...rest }, ref) => {
    const classes = classNames('input', className);
    return (
      <div className={`input-wrapper`}>
        {label && (
          <label
            className={
              error ? 'input__label input__label_invalid' : 'input__label'
            }
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input ref={ref} id={id} name={id} className={classes} {...rest} />
        {error && <span className="input__error">{error}</span>}
      </div>
    );
  }
);

export default Input;
