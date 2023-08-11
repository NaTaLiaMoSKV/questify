import { createSlice } from '@reduxjs/toolkit';
import { getAllCards, addCard, deleteCard, editCard } from './cardOperations';
import { logIn, logOut, refreshCurrentUser } from 'redux/auth/authOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    isLoading: false,
    updatingCard: null,
    error: null,
  },
  reducers: {
    addUpdatingCard(state, action) {
      state.updatingCard = action.payload;
    }
  },
  extraReducers: builder => {
    builder

      .addCase(getAllCards.pending, handlePending)
      .addCase(getAllCards.rejected, handleRejected)
      .addCase(getAllCards.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cards = action.payload;
          state.error = null;
      })

      .addCase(addCard.pending, handlePending)
      .addCase(addCard.rejected, handleRejected)
      .addCase(addCard.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cards.push(action.payload.createdCard);
          state.error = null;
      })

      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.rejected, handleRejected)
      .addCase(deleteCard.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          // НЕПОНЯТНО ПОКА
          // const index = state.cards.findIndex(
          //   item => item._id === action.payload.deletedBoard._id
          // );
          // state.cards.splice(index, 1);
      })

      .addCase(logOut.fulfilled, state => {
        state.cards = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.cards = action.payload.userData.cards;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        const storedCards = localStorage.getItem('cards');
        state.cards = JSON.parse(storedCards);
        state.error = null;
        state.isLoading = false;
      })
  
      .addCase(editCard.pending, handlePending)
      .addCase(editCard.rejected, handleRejected)
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id, title, difficulty, category, date, time, type, status } = action.payload.editedCard;

        const cardIndex = state.cards.findIndex(
          item => item._id === _id
        );

        state.cards[cardIndex] = {
          ...state.cards[cardIndex], title, difficulty, category, date, time, type, status
        };
        localStorage.setItem('cards', JSON.stringify(state.cards));
    })
  },
});

export const cardReducer = cardSlice.reducer;
