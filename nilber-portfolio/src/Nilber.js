import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './Styling/ThemeProvider.js';

import Typography from "@material-ui/core/Typography"
import './Styling/TwinklingStarClouds.css'
import RedSplash from './Styling/Images/RedPaintSplashCompressed.png'

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
      margin: theme.spacing(1),
      // textShadow: `-1px 1px 0 #000,
			// 	1px 1px 0 #000,
			// 	1px -1px 0 #000,
			// 	-1px -1px 0 #000`
    },
    header: {
      position: 'relative',
      width:'100%',
      '&:before': {
        content: '""',
        width: '100%',
        height: '200%',
        position: 'absolute',
        backgroundImage: `url(${RedSplash})`,
        filter: 'brightness(0.60)contrast(3)hue-rotate(187deg)saturate(8.5)opacity(0.85)',
        backgroundSize: '150%',
        backgroundPosition: 'center',
        //opacity: 0.85,
        zIndex: -1,
        [theme.breakpoints.up('md')]: {
          backgroundSize: '75%',
          backgroundPosition: 'center',
        }
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
          <Typography className={classes.text} align='center' variant="h2" component="h1">Nílber Remón</Typography>
        </div> 
        <Typography className={classes.text} align='center' variant="h5" style={{fontFamily: 'abel', fontWeight: 800}}>DATA/ANALYTICS/AI/CLOUD ENGINEER, SOFTWARE DEVELOPER & CONSULTANT</Typography>
        <Main />
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default Nilber;
