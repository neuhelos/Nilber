import React from 'react';

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./Styling/ThemeProvider.js";

import BioGrid from './Components/BioGrid'

import './Styling/TwinklingStarClouds.css'

const Nilber = () => {
  
  return(

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>  
      <div className="App">
        <BioGrid />

      </div>
    </ThemeProvider>

  );
}

export default Nilber;
