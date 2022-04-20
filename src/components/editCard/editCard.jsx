import React from 'react';
import './editCard.css';

import Container from '../container/container';
import Input from '../input/input';
import TeaxtArea from '../textArea/textArea';
import Button from '../button/button';

function EditCard({ closeHandler, saveHandler }) {
  return (
    <Container className="edit-card__container">
      <Input type="text" className="edit-card__title-input" />
      <TeaxtArea className="edit-card__content" />
      <div className="edit-card__btns-wrapper">
        <Button onClick={() => closeHandler()}>Отмена</Button>
        <Button className="additional-margin" onClick={() => saveHandler()}>
          Сохранить
        </Button>
      </div>
    </Container>
  );
}

export default EditCard;
