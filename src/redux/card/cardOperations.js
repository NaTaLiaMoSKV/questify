import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'redux/auth/authOperations';

export const getAllCards = createAsyncThunk(
  'card/fetchAllCards',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('card');
      console.log('cards:');
      console.log(data);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'card/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`card/${cardId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getCardById  = createAsyncThunk(
//   'dashboards/getById',
//   async (dashboardId, thunkAPI) => {
//     try {
//       const { data } = await instance.get(`api/dashboard/${dashboardId}`);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
      return thunkAPI.rejectWithValue(error.message);
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
