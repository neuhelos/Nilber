import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './Styling/ThemeProvider.js';

import Typography from "@material-ui/core/Typography"
import './Styling/TwinklingStarClouds.css'
import RedSplash from './Styling/Images/RedPaintSplash.png'

import Main from './Components/Main'
import Footer from './Components/Footer'


const useStyles = makeStyles( (theme) => ({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'jost',
      margin: theme.spacing(1)
    },
    header: {
      position: 'relative',
      '&:before': {
        content: '""',
        width: '100%',
        height: '200%',
        position: 'absolute',
        backgroundImage: `url(${RedSplash})`,
        backgroundSize: '100%',
        zIndex: -1
      }
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
        <div className={classes.header}>
          <Typography className={classes.text} align='center' variant="h2">Nílber Remón</Typography>
        </div> 
        <Typography className={classes.text} align='center' variant="h5" style={{fontFamily: 'abel'}}>FULL STACK WEB DEVELOPER</Typography>
        <Main />
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default Nilber;
