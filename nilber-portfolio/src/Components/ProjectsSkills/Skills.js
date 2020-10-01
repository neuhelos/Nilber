import React from 'react'

import { skillsLogos } from './SkillsLogos'

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
        },
        padding: theme.spacing(2)
    },
    container: {
        width: '10%',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            width: '25%'
        },
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
    
    const classes = useStyles()
    const theme = useTheme()
    const mobileMediaQuery = useMediaQuery(theme.breakpoints.down('sm'))

    
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
