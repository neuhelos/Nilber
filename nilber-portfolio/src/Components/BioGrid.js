import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( (theme) => ({
    root: {
        '& *': {
            fontFamily: 'jost'
        },
        flex: 1
    },
}))

const BioGrid = () => {

    const classes = useStyles()

    
    return (
            <div className={classes.root}>
                
            </div>


    )
}

export default BioGrid

