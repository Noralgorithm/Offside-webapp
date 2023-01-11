import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  userInfo: {},
  token: null,
  success: false,
  event: 1,
  eventsList: [],
  money: 1
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { token, user } = payload.item;
      const { name, role, email, id } = user;
      state.userInfo = { name, role, email, id };
      state.token = token;
      state.success = true;
    },
    logout: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.success = false;
    },
    setEvent: (state, { payload }) => {
      state.event = payload;
    },
    setEventsList: (state, { payload }) => {
      state.eventsList = payload;
    },
    setMoney: (state, { payload }) => {
      state.money = payload;
    }
  },
});

export const { login, logout, register, setEvent, setEventsList, setMoney } = userSlice.actions;
export default userSlice.reducer;
