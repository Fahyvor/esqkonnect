import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string | null;
  first_name: string | null;
  id: string | null;
  last_name: string | null;
  phone: string | null;
  user_type: string | null;
}

const user: User | null = JSON.parse(localStorage.getItem('user'));

const initialState: User = user || {
  email: null,
  first_name: null,
  id: null,
  last_name: null,
  phone: null,
  user_type: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: { user: User }) => state.user;

export default userSlice.reducer;
