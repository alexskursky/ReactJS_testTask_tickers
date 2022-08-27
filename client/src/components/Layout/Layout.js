import React from "react";
import { Container, Box } from "@mui/material";

const Layout = (props) => {
  return (
    <Container maxWidth="md">
      <h1>Price Tickers Data</h1>
      {props.children}
    </Container>
  );
};

export default Layout;
