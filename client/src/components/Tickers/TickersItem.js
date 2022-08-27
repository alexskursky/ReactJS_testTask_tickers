import React from "react";
import {
  ListItem,
  Chip,
  ListItemText,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import { ArrowUpward, ArrowDownward, Delete } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { useDeleteTickersMutation } from "../../store/baseApi/wsApi";
import { tickersActions } from "../../store/tickers";

const TickersItem = (props) => {
  const [deleteTicker, { isLoadingDelete }] = useDeleteTickersMutation();
  const dispatch = useDispatch();
  const {
    exchange,
    price,
    change,
    changePercent,
    tickerName,
    tickerYield,
    dividend,
    lastTradeTime,
  } = props;

  const date = new Date(lastTradeTime);

  const changeColor = changePercent > 0 ? "success" : "error";
  const changeIcon = changePercent > 0 ? <ArrowUpward /> : <ArrowDownward />;

  const deleteTickerHandler = () => {
    deleteTicker(tickerName);
    dispatch(tickersActions.deleteTickers(tickerName));
  };
  return (
    <>
      {isLoadingDelete && <p>Deleting...</p>}
      <ListItem
        sx={{ textAlign: "center", flexDirection: { xs: "column", md: "row" } }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={deleteTickerHandler}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemText sx={{ minWidth: "120px" }}>
          <Tooltip title="Ticker">
            <Chip label={tickerName} color="primary" />
          </Tooltip>
        </ListItemText>
        <Tooltip title="Exchange">
          <ListItemText primary={exchange} />
        </Tooltip>
        <Tooltip title="Price">
          <ListItemText primary={price + "$"} />
        </Tooltip>
        <Tooltip title="Change">
          <ListItemText primary={change} sx={{ minWidth: "100px" }} />
        </Tooltip>
        <ListItemText>
          <Tooltip title="Change percent">
            <Chip
              icon={changeIcon}
              label={changePercent + "%"}
              color={changeColor}
            />
          </Tooltip>
        </ListItemText>
        <Tooltip title="Yield">
          <ListItemText primary={tickerYield} />
        </Tooltip>
        <Tooltip title="Dividend">
          <ListItemText primary={dividend} />
        </Tooltip>
        <Tooltip title="Last time trade">
          <ListItemText primary={date.toLocaleTimeString()} />
        </Tooltip>
      </ListItem>
      <Divider />
    </>
  );
};

export default TickersItem;
