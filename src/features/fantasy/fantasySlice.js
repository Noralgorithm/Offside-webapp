import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bench: {
    paginate: {},
    positionFilter: '',
    players: [],
    teamFilter: '',
    playerNameSearch: ''
  },
  teamList: [],
  selectedPlayer: {
    id: null,
    position: null
  }
};

const fantasySlice = createSlice({
  name: 'fantasy',
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
    setBenchPlayerNameSearch:  (state, { payload }) => {
      state.bench.playerNameSearch = payload;
    },
    setNextBenchPage: (state) => {
      state.bench.paginate.page++;
    },
    selectPlayer: (state, { payload }) => {
      state.selectedPlayer = payload;
    }
  }
})

export const { storeBenchInfo, storeTeamList, setBenchTeamFilter, setBenchPositionFilter, setBenchPlayerNameSearch, setNextBenchPage, selectPlayer } = fantasySlice.actions;

export default fantasySlice.reducer;