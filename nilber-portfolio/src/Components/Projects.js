import React from 'react'

import { projectPosts } from './ProjectPosts'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        '& *': {
            fontFamily: 'jost'
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    overlayContainer: {
        margin: theme.spacing(1),
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
        }
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
        height: '100%',
    },
    text : {
        fontFamily: 'abel',
    }
}))


const Projects = () => {
    
    const classes = useStyles();

    let projects = projectPosts.map( projects => {
        return (
            <a className={classes.container} href={projects.projectURL} target='_blank' rel='noopener noreferrer'>
                <Grid container className={classes.overlayContainer} direction="column" justify="center" alignItems="center">
                    <div className={classes.overlay}></div>
                    <img className={classes.image} src={projects.image} alt={projects.projectName} />
                    <div className={classes.overlayDetails}>
                        <Typography variant="h3" align='center' gutterBottom={true}>{projects.projectName}</Typography>
                        <Typography className={classes.text} variant="h5" align='center'>{projects.techStack}</Typography>
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
