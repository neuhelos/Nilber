import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import Timeline from './ResumeTimeline'

import TileGrid from '../Styling/Images/HeaderDiamondGrid.svg'
import TechnicalResume from '../Assets/Nilber Remon - Resume.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        fontFamily: 'jost',
        border: '4px solid #FFFFFF',
        borderRadius: '4px',
        color: '#FFFFFF',
        width: '50%',
        margin: theme.spacing(1),
        background: 'transparent',
        backgroundImage: `url(${TileGrid})`,
        backgroundSize: '50%',
        fontSize: '1.5rem',
        fontWeight: 800,
        textAlign: 'center'
    }
}));

const Resume = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button} href={TechnicalResume} target="_blank" rel="noopener noreferrer" size='large'>
                Download Resume
            </Button>
            <div className={classes.root}>
                <Timeline />
            </div>
        </div>
    );
}

export default Resume