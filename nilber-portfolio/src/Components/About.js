import React from 'react'

import Nilber from '../Styling/Images/NilberRemonCroppedCircle.png'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        minHeight: '100%',
        position: 'absolute',
        overflow: 'auto',
        height: '100%'
    },
    textContainer: {
        padding: theme.spacing(2),
        display: 'block'
    },
    imageContainer: {
        width: '25%',
        margin: theme.spacing(2),
        float: 'left',
        display: 'table',
        shapeOutside: 'circle()',
        '& -webkit-shape-outside' : 'circle()',
        borderRadius: '50%'
    },
    image: {
        width: '100%',
        padding: theme.spacing(1),
        border: '10px solid #F5F5F5',
        borderRadius: '50%'
    },
    text : {
        fontFamily: 'abel',
        fontSize: '1.5rem',
    }
}))

const About = () => {
    
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={Nilber} alt="Nílber Remón" />
            </div>
            <div className={classes.textContainer}>
                <Typography className={classes.text}>
                    We’re living at the precipice of a moment that can reshape our society. As a personal and professional vocation, 
                    I want to support the building and prefiguration of a future that centers the most marginalized voices. It’s what 
                    brought me to the tech field and galvanized my path towards becoming a software developer. Over a year ago I 
                    decided to take a risk and reset my life, moving to New York City and reprogramming my professional career to 
                    become a junior developer. I've always been enthralled of the vibrancy and wonder of the tech field to spearhead 
                    and create readily resonant change. This is the impact I'd like to make, especially in the communities I inhabit, 
                    supporting those organizations fighting the struggles and challenges faced by communities of color and LGBTQ+ 
                    communities. My journey led me to Pursuit, a year-long immersive fellowship centered on recoding my professional 
                    experiences into building expertise with full stack web development, while mastering the risks and challenges of 
                    reimagining a career in tech committed to trailblazing, solutions-driven change.  As a software developer, I hope 
                    to contribute my skills and knowledge base around JavaScript and its frameworks and libraries, including React and 
                    Node.js as well as HTML and CSS sculpted through the lens of my unique professional perspectives to collaboratively 
                    create riveting and functional end user experiences. 
                </Typography>
            </div>
        </Box>
    )
}

export default About
