import React, { useState } from "react";
import { useChangeIntervalMutation } from "../../store/baseApi/wsApi";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FETCH_INTERVALS_LIST } from "./tickersData";

const ChangeFetchingInterval = () => {
  const [selectedInterval, setSelectedInterval] = useState("");
  const [changeInterval, { isLoadingChange }] = useChangeIntervalMutation();

  const changeIntervalHandler = (event) => {
    setSelectedInterval(event.target.value);
    changeInterval(event.target.value);
  };
  return (
    <Grid item xs={4}>
      {isLoadingChange && <p>Changing the interval...</p>}
      <FormControl>
        <InputLabel>Change</InputLabel>
        <Select
          value={selectedInterval}
          label="Add"
          onChange={changeIntervalHandler}
          sx={{ minWidth: "120px" }}
        >
          {FETCH_INTERVALS_LIST.map((time) => (
            <MenuItem key={time} value={time}>
              {time / 1000 + "s"}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select fetching interval</FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default ChangeFetchingInterval;
