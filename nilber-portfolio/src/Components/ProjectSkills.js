import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import Skills from './Skills'
import Projects from './Projects'

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        position: 'absolute',
        overflow: 'auto',
        minHeight: '100%',
        height: '100%'
    },
    container: {
        width: '100%',
        padding: theme.spacing(1)
    },
    text : {
        fontFamily: 'jost',
    }
}))

const ProjectSkills = () => {
    
    const classes = useStyles();
    const theme = useTheme();
    const mobileMediaQuery = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <div className={classes.root}>
            <Grid container className={classes.container} direction="column" justify="center" alignItems="center">
                <Skills />
            </Grid>
            <Grid container className={classes.container} direction="column" justify="center" alignItems="center">
                <Typography className={classes.text} variant={mobileMediaQuery ? 'h5' : 'h3'} align='center' gutterBottom={true}>PROJECTS</Typography>
                <Projects />
            </Grid>
        </div>
    )
}

export default ProjectSkills
