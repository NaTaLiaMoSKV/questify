import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';

export const getAllCards = createAsyncThunk(
  'card/fetchAllCards',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('card');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUpdatingCard = (card) => ({
  type: 'card/addUpdatingCard',
  payload: card,
});

export const addCard = createAsyncThunk(
  'card/addCard',
  async ({ title, difficulty, category, date, time, type }, thunkAPI) => {
    try {
      const { data } = await instance.post('card', {
        title, difficulty, category, date, time, type
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'card/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      await instance.delete(`card/${cardId}`);
      return { cardId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'card/editCard',
  async ({ cardId, updatedData }, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `card/${cardId}`,
        updatedData
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const completeCard = createAsyncThunk(
  'card/completeCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `card/complete/${cardId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
