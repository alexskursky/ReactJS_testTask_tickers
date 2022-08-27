import React from "react";
import { useGetsTickersQuery } from "../../store/baseApi/wsApi";
import { useSelector } from "react-redux";
import TickersList from "./TickersList";
import AddNewTicker from "./AddNewTicker";
import { Grid } from "@mui/material";
import ChangeFetchingInterval from "./ChangeFetchingInterval";

const Tickers = () => {
  useGetsTickersQuery();
  const tickers = useSelector((state) => state.tickers.tickersList);

  return (
    <>
      {tickers.length > 0 ? (
        <TickersList tickers={tickers} />
      ) : (
        <p>No tickers found or server is loading...</p>
      )}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <AddNewTicker />
        <ChangeFetchingInterval />
      </Grid>
    </>
  );
};

export default Tickers;
