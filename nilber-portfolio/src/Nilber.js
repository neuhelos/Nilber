import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './Styling/ThemeProvider.js';

import Typography from "@material-ui/core/Typography"
import './Styling/TwinklingStarClouds.css'

import BioGrid from './Components/BioGrid'
import Footer from './Components/Footer'

const useStyles = makeStyles( (theme) => ({
    root: {
      '& *': {
        fontFamily: 'jost'
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    text: {
      fontFamily: 'jost',
      padding: theme.spacing(1)
    }

}))


const Nilber = () => {
  
  const classes = useStyles()

  return(

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>  
        <Typography className={classes.text} align='center' variant="h1">Nílber Remón</Typography>
        <Typography className={classes.text} align='center' variant="h4" style={{fontFamily: 'abel'}}>FULL STACK WEB DEVELOPER</Typography>
        <BioGrid />
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default Nilber;
