import { createSlice } from '@reduxjs/toolkit';

const user_email = localStorage.getItem('user');
const user_first_name = localStorage.getItem('user');
const user_last_name = localStorage.getItem('user');
const user_id = localStorage.getItem('user');
const user_phone = localStorage.getItem('user');
const user_type = localStorage.getItem('user');

const initialState = {
  email: user_email,
  first_name: user_first_name,
  id: user_id,
  last_name: user_last_name,
  phone: user_phone,
  user_type: user_type,
}

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserData: (state, action) => {
      const email = action.payload;
      const first_name = action.payload;
      const id = action.payload;
      const last_name = action.payload;
      const phone = action.payload;
      const user_type = action.payload;

      localStorage.setItem('user', JSON.stringify(state.email));
      localStorage.setItem('user', JSON.stringify(state.first_name));
      localStorage.setItem('user', JSON.stringify(state.id));
      localStorage.setItem('user', JSON.stringify(state.last_name));
      localStorage.setItem('user', JSON.stringify(state.phone));
      localStorage.setItem('user', JSON.stringify(state.user_type));
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state) => state.user.data;

export default userSlice.reducer;
