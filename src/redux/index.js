import { configureStore } from '@reduxjs/toolkit';
import cardsListReducer from './cardsListSlice';

export default configureStore({
  reducer: {
    cards: cardsListReducer,
  },
});
