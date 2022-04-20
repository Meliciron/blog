import React from 'react';
import './confirmation.css';
import Container from '../container/container';
import Button from '../button/button';

function Confirmation({ title, confirmHandler, cancelHandler }) {
  return (
    <Container className="confirmation">
      <h5 className="confirmation__title">
        Вы действительно хотите удалить запись '{title}' ?
      </h5>
      <div className="confirmation__btns-wrapper">
        <Button onClick={cancelHandler}>Нет</Button>
        <Button className="red" onClick={confirmHandler}>
          Да
        </Button>
      </div>
    </Container>
  );
}

export default Confirmation;
