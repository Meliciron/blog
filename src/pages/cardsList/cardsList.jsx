import React, { Fragment } from 'react';
import './cardsList.css';
import Container from '../../components/container/container';
import Card from '../../components/card/card';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';

const CardsList = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const navigate = useNavigate();

  const proccedBtnHandler = () => {
    navigate('/NewCard', { replace: true });
  };

  return (
    <Fragment>
      <Container>
        <h1 className="cards-list__title">Блог</h1>
        <div className="cards-list__greed-container">
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
          <Card proccedBtnHandler={proccedBtnHandler} />
        </div>
        <div className="cards-list__btn-wrapper">
          <Button
            onClick={() => {
              navigate('/NewCard', { replace: true });
            }}
          >
            + Добавить
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default CardsList;
