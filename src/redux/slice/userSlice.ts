import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: {
    isFetching: false,
  },
  user: {
    email: '',
    isAuthenticated: false,
    role: '',
    token: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = true;
    },
    loginUser: (state, action) => {
      state.user.email = action.payload.email;
      state.user.isAuthenticated = true;
      state.user.role = action.payload.role;
      state.user.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.user.email = '';
      state.user.isAuthenticated = false;
      state.user.role = '';
      state.user.token = '';
    },
  },
});

export const { setIsFetching } = userSlice.actions;

export default userSlice.reducer;
