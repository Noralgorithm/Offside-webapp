import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
  money: 0,
  bench: {
    paginate: {},
    positionFilter: "",
    players: [],
    teamFilter: "",
    playerNameSearch: "",
  },
  teamList: [],
  selectedPlayer: {
    id: null,
    position: null,
  },
  insertedPlayer: 0,
  removedPlayer: 0
};

const fantasySlice = createSlice({
  name: "fantasy",
  initialState,
  reducers: {
    storeBenchInfo: (state, { payload }) => {
      state.bench.paginate = payload.paginate;
      state.bench.players = payload.items;
    },
    storeTeamList: (state, { payload }) => {
      state.teamList = payload;
    },
    setBenchTeamFilter: (state, { payload }) => {
      state.bench.teamFilter = payload;
    },
    setBenchPositionFilter: (state, { payload }) => {
      state.bench.positionFilter = payload;
    },
    resetFilters: (state) => {
      state.bench.teamFilter = '';
      state.bench.positionFilter = '';
    },
    setBenchPlayerNameSearch: (state, { payload }) => {
      state.bench.playerNameSearch = payload;
    },
    setNextBenchPage: (state) => {
      state.bench.paginate.page++;
    },
    selectPlayer: (state, { payload }) => {
      state.selectedPlayer = payload;
    },
    insertPlayer: (state) => {
      state.insertedPlayer++;
      state.selectedPlayer = {
        id: null,
        position: null,
      };
    },
    removePlayer: (state) => {
      state.removedPlayer++;
    },
    setFantasyInfo: (state, { payload }) => {
      state.points = payload.points;
      state.money = payload.money;
    }
  },
});

export const {
  storeBenchInfo,
  storeTeamList,
  setBenchTeamFilter,
  setBenchPositionFilter,
  resetFilters,
  setBenchPlayerNameSearch,
  setNextBenchPage,
  selectPlayer,
  insertPlayer,
  removePlayer,
  setFantasyInfo
} = fantasySlice.actions;

export default fantasySlice.reducer;
