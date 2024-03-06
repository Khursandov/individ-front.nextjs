import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILogin } from './auth.interface';

const initialState: any = {
  user: {},
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {
      console.log('login', state, action.payload);
    },
    logout: (state) => {
      console.log('logout', state);
    },
  },
});

export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
