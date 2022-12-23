import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bench: {}
};

const fantasySlice = createSlice({
  name: 'fantasy',
  initialState,
  reducers: {
    storeBenchInfo: (state, { payload }) => {
      state.bench.paginate = payload.paginate;
      state.bench.players = payload.items;
    }
  }
})

export const { storeBenchInfo } = fantasySlice.actions;

export default fantasySlice.reducer;