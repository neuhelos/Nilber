import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './Styling/ThemeProvider.js';

import Typography from "@material-ui/core/Typography"
import './Styling/TwinklingStarClouds.css'

import BioGrid from './Components/BioGrid'

const useStyles = makeStyles( (theme) => ({
    root: {
      '& *': {
        fontFamily: 'jost'
      }
    },
    text: {
      fontFamily: 'jost'
    }

}))


const Nilber = () => {
  
  const classes = useStyles()

  return(

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>  
        <Typography className={classes.text} align='center' variant="h1">Nilber Remon</Typography>
        <BioGrid />
      </div>
    </ThemeProvider>

  );
}

export default Nilber;
