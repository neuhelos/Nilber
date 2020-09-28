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
        margin: theme.spacing(1)
    },
    image: {
        width: '75%',
        padding: theme.spacing(1),
    },
    text : {
        fontFamily: 'jost',
    }
}))


const Projects = () => {
    
    const classes = useStyles();

    let projects = projectPosts.map( projects => {
        return (
            <a href={projects.projectURL} target='_blank' rel='noopener noreferrer'>
                <Grid container className={classes.container} direction="column" justify="center" alignItems="center">
                    <div>
                        <div class="content-overlay"></div>
                        <img className={classes.image} src={projects.image} alt={projects.projectName} />
                        <div class="content-details fadeIn-bottom">
                            <Typography variant="h4" align='center' gutterBottom={true}>{projects.projectName}</Typography>
                            <Typography variant="h6" align='center' class="content-title">{projects.techStack}</Typography>
                        </div>
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
