import React from 'react';
import './modalWindow.css';

function ModalWindow({ children, isActive = false }) {
  return (
    <div
      className={
        isActive ? 'modal-window__wrapper' : 'modal-window__wrapper_hidden'
      }
    >
      <div className="modal-window__content">{children}</div>
    </div>
  );
}

export default ModalWindow;
