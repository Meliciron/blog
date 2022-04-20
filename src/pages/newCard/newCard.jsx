import React, { Fragment } from 'react';
import './newCard.css';

import Container from '../../components/container/container';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import TextArea from '../../components/textArea/textArea';
import ModalWindow from '../../components/modalWindow/modalWindow';
import Confirmation from '../../components/confirmation/confirmation';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToList,
  removeFromList,
  patchCard,
} from '../../redux/cardsListSlice';

function NewCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chosenCard = useSelector((state) => state.cards.chosenCard);

  const [title, setTitle] = React.useState(
    chosenCard.title ? chosenCard.title : ''
  );
  const [content, setContent] = React.useState(
    chosenCard.content ? chosenCard.content : ''
  );
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const titleRef = React.useRef();
  const contentRef = React.useRef();

  const titleHandler = () => {
    setTitle(titleRef.current.value);
  };

  const contentHandler = () => {
    setContent(contentRef.current.value);
  };

  const saveHandler = () => {
    if (chosenCard.id === undefined) {
      dispatch(
        addToList({
          id: Date.now(),
          title: title !== '' ? title : 'untitled',
          content: content,
        })
      );
      navigate('/blog/', { replace: true });
    } else {
      dispatch(
        patchCard({
          id: chosenCard.id,
          title: title,
          content: content,
        })
      );
      navigate('/blog/', { replace: true });
    }
  };

  const removeHandler = () => {
    setIsModalVisible(true);
  };

  const removeConfirmed = () => {
    if (chosenCard.id !== undefined) {
      dispatch(removeFromList(chosenCard.id));
      setIsModalVisible(false);
      navigate('/blog/', { replace: true });
    }
  };

  const removeCanceled = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Container className="new-card">
        <Button
          onClick={() => {
            navigate('/blog/', {
              replace: true,
            });
          }}
        >
          Назад
        </Button>
        <div className="new-card__title-wrapper">
          <h3 className="new-card__title">Запись "{title}"</h3>
          <Input ref={titleRef} onChange={titleHandler} value={title} />
        </div>
        <TextArea
          ref={contentRef}
          onChange={contentHandler}
          value={content}
          className="new-card__content"
        />
        <div className="new-card__btns-wrapper">
          <Button onClick={removeHandler} className="red">
            Удалить
          </Button>
          <Button onClick={saveHandler}>Сохранить</Button>
        </div>
      </Container>
      <ModalWindow isActive={isModalVisible}>
        <Confirmation
          title={title}
          confirmHandler={removeConfirmed}
          cancelHandler={removeCanceled}
        />
      </ModalWindow>
    </Fragment>
  );
}

export default NewCard;
