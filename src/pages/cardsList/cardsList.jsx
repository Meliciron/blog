import React, { Fragment } from 'react';
import './cardsList.css';
import Container from '../../components/container/container';
import Card from '../../components/card/card';
import Button from '../../components/button/button';
import ModalWindow from '../../components/modalWindow/modalWindow';
import EditCard from '../../components/editCard/editCard';

const CardsList = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const modalVisability = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Fragment>
      <Container>
        <h1 className="cards-list__title">Блог</h1>
        <div className="cards-list__greed-container">
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
          <Card proccedBtnHandler={modalVisability} />
        </div>
        <div className="cards-list__btn-wrapper">
          <Button>+ Добавить</Button>
        </div>
      </Container>
      <ModalWindow isActive={isModalVisible}>
        <EditCard
          closeHandler={modalVisability}
          saveHandler={modalVisability}
        />
      </ModalWindow>
    </Fragment>
  );
};

export default CardsList;
