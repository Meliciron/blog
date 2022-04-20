import React from 'react';
import './newCard.css';

import Container from '../../components/container/container';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import TextArea from '../../components/textArea/textArea';
import { useNavigate } from 'react-router-dom';

function NewCard() {
  const navigate = useNavigate();

  return (
    <Container className="new-card">
      <Button
        onClick={() => {
          navigate('/CardsList', { replace: true });
        }}
      >
        Назад
      </Button>
      <div className="new-card__title-wrapper">
        <h3 className="new-card__title">Запись ""</h3>
        <Input />
      </div>
      <TextArea className="new-card__content" />
      <div className="new-card__btns-wrapper">
        <Button className="red">Удалить</Button>
        <Button>Сохранить</Button>
      </div>
    </Container>
  );
}

export default NewCard;
