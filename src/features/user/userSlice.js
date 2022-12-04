import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./userActions";

const initialState = {
  loading: 'idle',
  userInfo: {}, 
  token: null, 
  success: false 
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, _) => {
      if (state.loading === 'idle') state.loading = 'pending';
    })
    builder.addCase(register.fulfilled, (state, _) => {
      if (state.loading === 'pending') state.loading = 'idle';
    })
    builder.addCase(login.pending, (state, _) => {
      if (state.loading === 'idle') state.loading = 'pending';
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      const { token, user } = payload;
      const { name, role, email, id } = user;
      state.userInfo = { name, role, email, id };
      state.token = token;
      state.success = true;
      if (state.loading === 'pending') state.loading = 'idle';
    })
  },
})

export default userSlice.reducer;