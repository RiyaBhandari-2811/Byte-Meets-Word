import { createSlice } from '@reduxjs/toolkit';

export const userStoreSlice = createSlice({
  name: 'userStore',
  initialState: {
    isAuthorized: false,
    role: null,
    token: null,
    expiry: 0,
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthorized = action.payload.isAuthorized;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.expiry = action.payload.expiry;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = null;
      state.token = null;
      state.expiry = 0;
    },
  },
});

export const { setUser, logout } = userStoreSlice.actions;

export default userStoreSlice.reducer;
