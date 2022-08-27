import { createSlice } from "@reduxjs/toolkit";

const tickersSlice = createSlice({
  name: "tickers",
  initialState: {
    tickersList: [],
  },
  reducers: {
    updateTickers(state, action) {
      state.tickersList = action.payload;
    },
    deleteTickers(state, action) {
      state.tickersList = state.tickersList.filter(
        (item) => item.ticker !== action.payload
      );
    },
  },
});

export const tickersActions = tickersSlice.actions;

export default tickersSlice.reducer;
