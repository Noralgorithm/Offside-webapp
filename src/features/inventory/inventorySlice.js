import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paginate: {
    page: 0,
    pages: 0,
    perPage: 0,
    total: 0
  },
  stickers: []
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    storeInventory: (state, { payload }) => {
      state.paginate = payload.paginate;
      state.stickers = payload.items;
    },
    setNextPage: (state) => {
      if (state.paginate.page < state.paginate.pages - 1) state.paginate.page++;
    },
    setPrevPage: (state) => {
      if (state.paginate.page > 0) state.paginate.page--;
    }
  }
})

export const { storeInventory, setNextPage, setPrevPage } = inventorySlice.actions;

export default inventorySlice.reducer;