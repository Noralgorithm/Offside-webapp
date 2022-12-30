import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stickersPerPage: 12,
  percentage: 0,
  teamsList: [],
  eventId: 1,
  currentTeam: {
    name: "",
    index: 0,
    id: null,
    stickers: [],
    obtainedCount: 0,
    quantity: 0,
    pages: 0,
    currentPage: 1,
  },
  selectedSticker: null,
  claimedSticker: false,
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setTeamsList: (state, { payload }) => {
      state.teamsList = payload;
      state.currentTeam.id = payload[0].id;
    },
    setCurrentTeam: (state, { payload }) => {
      const { album, stickers } = payload.item;
      const pagesQuantity = Math.ceil(stickers.length / state.stickersPerPage);
      const { id } = album.currentTeam;
      state.currentTeam.id = id;
      state.currentTeam.stickers = stickers;
      state.currentTeam.pages = pagesQuantity;
      state.currentTeam.quantity = stickers.length;
      state.currentTeam.name = album.currentTeam.name;
      state.currentTeam.obtainedCount = stickers.filter(
        (sticker) => sticker.isAttached
      ).length;

      if (state.currentTeam.currentPage === 1) {
        state.currentTeam.currentPage = pagesQuantity;
      } else {
        state.currentTeam.currentPage = 1;
      }
    },
    filterTeam: (state, { payload }) => {
      const encounteredTeam = state.teamsList.filter(
        (team) => team.id === Number(payload)
      );
      state.currentTeam.index = state.teamsList.indexOf(encounteredTeam[0]);
    },
    setNextTeam: (state) => {
      if (state.currentTeam.index < state.teamsList.length - 1) {
        state.currentTeam.index++;
      }
    },
    setPrevTeam: (state) => {
      if (state.currentTeam.index > 0) {
        state.currentTeam.index--;
      }
    },
    setNextPage: (state) => {
      if (state.currentTeam.currentPage < state.currentTeam.pages)
        state.currentTeam.currentPage++;
    },
    setPrevPage: (state) => {
      if (state.currentTeam.currentPage > 0) state.currentTeam.currentPage--;
    },
    putSticker: (state) => {
      state.claimedSticker = !state.claimedSticker;
    },
    selectSticker: (state, { payload }) => {
      if (state.selectedSticker === payload) state.selectedSticker = null;
      else state.selectedSticker = payload;
    },
  },
});

export const {
  setTeamsList,
  setCurrentTeam,
  filterTeam,
  setNextTeam,
  setPrevTeam,
  setNextPage,
  setPrevPage,
  putSticker,
  selectSticker,
  clickEmptySlot,
} = albumSlice.actions;
export default albumSlice.reducer;
