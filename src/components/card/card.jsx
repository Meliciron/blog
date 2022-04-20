import React from 'react';
import './card.css';
import Button from '../button/button';
import TextArea from '../textArea/textArea';

function Card({ title = 'title', content, proccedBtnHandler }) {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <TextArea className="card__content" readOnly value={content} />
      <Button className={'wide'} onClick={() => proccedBtnHandler()}>
        Перейти
      </Button>
    </div>
  );
}

export default Card;
