import React from 'react'

import { projectPosts } from './ProjectPosts'

import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),
        '& *': {
            fontFamily: 'jost'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(1)
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '75%',
        padding: theme.spacing(1),
        borderRadius: '4px',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    overlayContainer: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        border: 'solid #F5F5F5 4px ',
        borderRadius: '4px',
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
        background: 'rgba(0,0,0,0.85)',
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
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(1),
        left: '50%',
        opacity: '0',
        top: '90%',
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
    },
    link: {
        color: '#FFFFFF',
        '&:hover': {
            color: '#FF0101'
        },
    },
}))


const Projects = () => {
    
    const classes = useStyles()
    const theme = useTheme();
    const mobileMediaQuery = useMediaQuery(theme.breakpoints.down('sm'));

    let projects = projectPosts.map( project => {
        return (
            <div className={classes.root}>
                <Link className={classes.link} href={project.projectURL} target="_blank" rel="noopener noreferrer">
                    <Typography variant={mobileMediaQuery ? 'h5' : 'h4'} align='center' gutterBottom={true}>{project.projectName}</Typography>
                </Link>
                <a className={classes.container} href={project.projectURL} target='_blank' rel='noopener noreferrer'>
                    <Grid container className={classes.overlayContainer} direction="column" justify="center" alignItems="center">
                        <div className={classes.overlay}></div>
                        <div style={{width: '100%', margin: "-2px"}}>
                            <img className={classes.image} src={project.image} alt={project.projectName} />
                        </div>
                        <div className={classes.overlayDetails}>
                            <Typography variant={mobileMediaQuery ? 'body1' : 'h5'} align='center' gutterBottom={true}>{project.description}</Typography>
                            <Typography className={classes.text} variant={mobileMediaQuery ? 'body1' : 'h5'}  align='center'>Tech Stack: {project.techStack}</Typography>
                        </div>
                    </Grid>
                </a>
            </div>
        )
    })

    return (
        <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
            {projects}
        </Grid>
    )
}

export default Projects
