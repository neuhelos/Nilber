import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles( (theme) => ({
    root: {
        '& *': {
            fontFamily: 'jost'
        },
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        flex: '50%',
        flexWrap: 'wrap',
    },
    paper: {
        width: '40%',
        textAlign: 'center',
        margin: theme.spacing(2),
    }
}))

const BioGrid = () => {

    const classes = useStyles()

    
    return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    ABOUT
                </Paper>
                <Paper className={classes.paper}>
                    RESUME
                </Paper>
                <Paper className={classes.paper}>
                    PROJECTS
                </Paper>
                <Paper className={classes.paper}>
                    SKILLS
                </Paper>
            </div>


    )
}

export default BioGrid

