import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <div>
      <Box sx={{ backgroundColor: theme.palette.primaryContainer?.main }}>
        fdshfs
      </Box>
    </div>
  );
}

export default App;
