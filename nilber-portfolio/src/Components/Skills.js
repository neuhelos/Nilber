import React from 'react'

import { skillsLogos } from './SkillsLogos'

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
        width: '10%'
    },
    image: {
        width: '100%',
        padding: theme.spacing(1),
    },
    text : {
        fontFamily: 'jost',
    }
}))


const Skills = () => {
    
    const classes = useStyles();

    
    let skills = skillsLogos.map( skillsLogos => {
        return (
            <Grid className={classes.container} container direction="column" justify="center" alignItems="center">
                <img className={classes.image} src={skillsLogos.logo} alt={skillsLogos.skill} />
                <Typography align='center' variant='subtitle1' gutterBottom={true}>{skillsLogos.skill}</Typography>
            </Grid>
        )
    })


    return (
        <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
            {skills}
        </Grid>
    )
}

export default Skills
