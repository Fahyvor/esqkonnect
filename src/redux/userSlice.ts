import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  token: string | null;
  user: {
    email: string | null;
    first_name: string | null;
    id: string | null;
    last_name: string | null;
    phone: string | null;
    user_type: string | null;
  }
}

const storedUserData = localStorage.getItem('user');
const userData: UserData | null = storedUserData ? JSON.parse(storedUserData) : null;

const initialState: UserData = userData || {
  token: null,
  user: {
    email: null,
    first_name: null,
    id: null,
    last_name: null,
    phone: null,
    user_type: null,
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      return { ...state, ...action.payload };
    },

    clearUserData: (state) => {
      localStorage.removeItem('user');
      return {
        token: null,
        user: {
          email: null,
          first_name: null,
          id: null,
          last_name: null,
          phone: null,
          user_type: null,
        }
      };
    }
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export const selectUserData = (state: { userData: UserData }) => state.userData;

export default userSlice.reducer;
