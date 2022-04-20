import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  cardsList: [],
  chosenCard: {},
};

const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState,
  reducers: {
    addToList(state, action) {
      state.cardsList.push(action.payload);
    },
    removeFromList(state, action) {
      state.cardsList = state.cardsList.filter(
        (card) => card.id !== action.payload
      );
    },
    patchCard(state, action) {
      const patchingCard = state.cardsList.find(
        (card) => card.id === action.payload.id
      );
      patchingCard.title = action.payload.title;
      patchingCard.content = action.payload.content;
    },
    setChosenCard(state, action) {
      state.chosenCard = action.payload;
    },
  },
});

export const { addToList, removeFromList, patchCard, setChosenCard } =
  cardsListSlice.actions;
export default cardsListSlice.reducer;
