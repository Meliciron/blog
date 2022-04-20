import React, { Fragment } from 'react';
import './cardsList.css';
import Container from '../../components/container/container';
import Card from '../../components/card/card';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setChosenCard } from '../../redux/cardsListSlice';

const CardsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCards = useSelector((state) => state.cards.cardsList);

  const proccedBtnHandler = () => {
    navigate('/blog/NewCard', { replace: true });
  };

  const addCardHandler = () => {
    dispatch(setChosenCard({}));
    navigate('/blog/NewCard', { replace: true });
  };

  return (
    <Fragment>
      <Container>
        <h1 className="cards-list__title">Блог</h1>
        <div className="cards-list__greed-container">
          {allCards?.map((card, index) => {
            return (
              <Card
                key={Date.now() + index}
                card={card}
                proccedBtnHandler={proccedBtnHandler}
              />
            );
          })}
        </div>
        <div className="cards-list__btn-wrapper">
          <Button onClick={addCardHandler}>+ Добавить</Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default CardsList;
