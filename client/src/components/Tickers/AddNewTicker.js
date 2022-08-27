import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { TICKERS_NAME_LIST } from "./tickersData";
import { useAddTickersMutation } from "../../store/baseApi/wsApi";

const AddNewTicker = () => {
  const [selectedTicker, setSelectedTicker] = useState("");
  const [addTicker, { isLoadingAdd }] = useAddTickersMutation();

  const selectTickerHandler = (event) => {
    setSelectedTicker(event.target.value);
    addTicker(event.target.value);
    setSelectedTicker("");
  };
  return (
    <Grid item xs={4}>
      {isLoadingAdd && <p>Adding new ticker...</p>}
      <FormControl>
        <InputLabel>Add</InputLabel>
        <Select
          value={selectedTicker}
          label="Add"
          onChange={selectTickerHandler}
          sx={{ minWidth: "120px" }}
        >
          {TICKERS_NAME_LIST.map((ticker) => (
            <MenuItem key={ticker} value={ticker}>
              {ticker}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select ticker to add new</FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default AddNewTicker;
