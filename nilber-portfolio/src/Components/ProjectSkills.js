import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import Skills from './Skills'

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        minHeight: '100%',
        position: 'absolute',
        overflow: 'auto',
        height: '100%'
    },
    container: {
        width: '100%',
        padding: theme.spacing(2),
        
    },
    imageContainer: {
        width: '25%',
        margin: theme.spacing(2),
        float: 'left',

        borderRadius: '50%'
    },
    image: {
        width: '100%',
        padding: theme.spacing(1),
        border: '10px solid #F5F5F5',
        borderRadius: '50%'
    },
    text : {
        fontFamily: 'jost',
    }
}))

const ProjectSkills = () => {
    
    const classes = useStyles();
    
    return (
        <>
        <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
            <Typography className={classes.text} variant='h4' align='center' gutterBottom={true}>SKILLS</Typography>
            <Skills />
        </Grid>
        <Grid container className={classes.root} direction="column" justify="flex-start" alignItems="center">
            <Typography className={classes.text} variant='h4' align='center' gutterBottom={true}>PROJECTS</Typography> 
        </Grid>
        </>
    )
}

export default ProjectSkills
