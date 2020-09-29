import React from 'react'

import { projectPosts } from './ProjectPosts'

import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        '& *': {
            fontFamily: 'jost'
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(1)
    },
    overlayContainer: {
        width: '75%',
        position: 'relative',
        overflow: 'hidden',
        '&:hover' : {
            '& $overlay' : {
                opacity: 1
            },
            '& $overlayDetails': {
                top: '50%',
                left: '50%',
                opacity: 1,
            }
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    overlay: {
        background: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
        '& -webkit-transition': 'all 0.4s ease-in-out 0s',
        '& -moz-transition': 'all 0.4s ease-in-out 0s',
        transition: 'all 0.4s ease-in-out 0s',
    },
    overlayDetails: {
        color: '#FFFFFF',
        position: 'absolute',
        width: '100%',
        left: '50%',
        opacity: '0',
        top: '80%',
        '& -webkit-transform': 'translate(-50%, -50%)',
        '& -moz-transform': 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        '& -webkit-transition': 'all 0.3s ease-in-out 0s',
        '& -moz-transition': 'all 0.3s ease-in-out 0s',
        transition: 'all 0.3s ease-in-out 0s',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text : {
        fontFamily: 'abel',
        padding: theme.spacing(2)
    }
}))


const Projects = () => {
    
    const classes = useStyles()
    const theme = useTheme();
    const mobileMediaQuery = useMediaQuery(theme.breakpoints.down('sm'));

    let projects = projectPosts.map( projects => {
        return (
            <a className={classes.container} href={projects.projectURL} target='_blank' rel='noopener noreferrer'>
                <Grid container className={classes.overlayContainer} direction="column" justify="center" alignItems="center">
                    <div className={classes.overlay}></div>
                    <div style={{width: '100%'}}>
                        <img className={classes.image} src={projects.image} alt={projects.projectName} />
                    </div>
                    <div className={classes.overlayDetails}>
                        <Typography variant={mobileMediaQuery ? 'h5' : 'h4'} align='center' gutterBottom={true}>{projects.projectName.toUpperCase()}</Typography>
                        <Typography className={classes.text} variant='h6'  align='center'>{projects.techStack}</Typography>
                    </div>
                </Grid>
            </a>
        
        )
    })

    return (
        <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
            {projects}
        </Grid>
    )
}

export default Projects
