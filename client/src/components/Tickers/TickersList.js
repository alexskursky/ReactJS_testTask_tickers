import React, { useState } from "react";
import { List } from "@mui/material";
import TickersItem from "./TickersItem";

const TickersList = (props) => {
  return (
    <List>
      {props.tickers?.map((ticker) => (
        <TickersItem
          key={ticker.ticker}
          exchange={ticker.exchange}
          price={ticker.price}
          change={ticker.change}
          changePercent={ticker.change_percent}
          dividend={ticker.dividend}
          lastTradeTime={ticker.last_trade_time}
          tickerName={ticker.ticker}
          tickerYield={ticker.yield}
        />
      ))}
    </List>
  );
};

export default TickersList;
