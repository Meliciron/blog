import React from 'react';
import './card.css';
import Button from '../button/button';
import TextArea from '../textArea/textArea';
import { useDispatch } from 'react-redux';
import { setChosenCard } from '../../redux/cardsListSlice';

function Card({ card, proccedBtnHandler }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setChosenCard(card));
    proccedBtnHandler();
  };

  return (
    <div className="card">
      <h3 className="card__title">{card.title}</h3>
      <TextArea className="card__content" readOnly value={card.content} />
      <Button className={'wide'} onClick={onClickHandler}>
        Перейти
      </Button>
    </div>
  );
}

export default Card;
