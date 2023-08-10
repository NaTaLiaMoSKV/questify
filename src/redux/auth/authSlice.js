import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    logIn,
    logOut,
    refreshCurrentUser,
} from './authOperations';

const handlePending = state => {
     state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    user: {
        email: null,
    },
    name: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.name = localStorage.getItem('userName');
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.name = localStorage.getItem('userName');
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.name = null;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
        
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
        
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })



  },
});

export const authReducer = authSlice.reducer;
