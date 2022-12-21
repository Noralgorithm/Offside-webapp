import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: 'idle',
  userInfo: {},
  token: null,
  success: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { token, user } = payload;
      const { name, role, email, id } = user;
      state.userInfo = { name, role, email, id };
      state.token = token;
      state.success = true;
    },
    logout: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.success = false;
    }
  }
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
