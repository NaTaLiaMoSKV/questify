import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const instance = axios.create({
  baseURL: 'https://questify-backend.goit.global/',
});

const setAuthHeader = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
};

const unsetAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        const sid = localStorage.getItem('sid');
        setAuthHeader(refreshToken);
      try {
          const { data } = await instance.post('auth/refresh', {
            sid,
        });
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', data.newRefreshToken);
        localStorage.setItem('accessToken', data.newAccessToken);
        localStorage.setItem('sid', data.newSid);
        error.config.headers.common.authorization = `Bearer ${data.newAccessToken}`;
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('auth/register', credentials);
      if (res.status === 201) {
        const { email, password } = credentials;
        const { data } = await instance.post('auth/login', {
          email,
          password,
        })
        setAuthHeader(data.accessToken);
        return data;
      }
    } catch (error) {
      toast.error(error.response.data.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('auth/login', credentials);
      setAuthHeader(data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('sid', data.sid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('auth/logout');
    localStorage.clear('refreshToken');
    localStorage.clear('accessToken');
    unsetAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
        const refreshToken = localStorage.getItem('refreshToken');
        const sid = localStorage.getItem('sid');
        setAuthHeader(refreshToken);
    if (sid === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
        const { data } = await instance.post('auth/refresh', { sid });
      setAuthHeader(data.newAccessToken);
      localStorage.setItem('refreshToken', data.newRefreshToken);
      localStorage.setItem('accessToken', data.newAccessToken);
      localStorage.setItem('sid', data.newSid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export default instance;
