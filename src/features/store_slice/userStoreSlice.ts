import { createSlice } from '@reduxjs/toolkit';

export const userStoreSlice = createSlice({
  name: 'userStore',
  initialState: {
    isAuthorized: false,
    role: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthorized = action.payload.isAuthorized;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.role = null;
    },
  },
});

export const { setUser } = userStoreSlice.actions;

export default userStoreSlice.reducer;
