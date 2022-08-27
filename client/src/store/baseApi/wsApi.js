import { baseApi } from "./baseApi";
import { io } from "socket.io-client";
import { tickersActions } from "../tickers";

export const wsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getsTickers: builder.query({
      query: async () => {
        return { data: null };
      },
      async onCacheEntryAdded(_arg, { dispatch, cacheEntryRemoved }) {
        const socket = io("http://localhost:4000");
        socket.emit("start");
        socket.on("ticker", (response) => {
          dispatch(tickersActions.updateTickers(response));
        });
        await cacheEntryRemoved;
        socket.close();
      },
    }),
    deleteTickers: builder.mutation({
      query: async (tickerName) => {
        const socket = io("http://localhost:4000");
        socket.emit("deleteTicker", tickerName);
      },
    }),
    addTickers: builder.mutation({
      query: async (tickerName) => {
        const socket = io("http://localhost:4000");
        socket.emit("addTicker", tickerName);
      },
    }),
    changeInterval: builder.mutation({
      query: async (newInterval) => {
        const socket = io("http://localhost:4000");
        await socket.emit("changeFetchInterval", newInterval);
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetsTickersQuery,
  useDeleteTickersMutation,
  useAddTickersMutation,
  useChangeIntervalMutation,
} = wsApi;
