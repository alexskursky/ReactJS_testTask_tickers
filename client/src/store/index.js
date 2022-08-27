import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi/baseApi";
import tickersReducer from "./tickers";

const store = configureStore({
  reducer: { tickers: tickersReducer, [baseApi.reducerPath]: baseApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
