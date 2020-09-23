import React from 'react';

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./Styling/ThemeProvider.js";

import './Styling/TwinklingStarClouds.css'

const Nilber = () => {
  
  return(

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>  
      <div className="App">
      NILBER
      </div>
    </ThemeProvider>

  );
}

export default Nilber;
