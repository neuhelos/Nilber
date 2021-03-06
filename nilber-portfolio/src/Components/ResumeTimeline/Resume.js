import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import Timeline from './ResumeTimeline'
import MobileTimeline from './MobileResumeTimeline'

//import TileGrid from '../../Styling/Images/HeaderDiamondGrid.svg'
//import TechnicalResume from '../../Assets/NilberRemon-Resume.pdf'

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
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        margin: theme.spacing(1),
        //background: 'transparent',
        background: 'repeating-conic-gradient(from 120deg, #000000 0% 25%, transparent 25% 50%) 50%/ 1.75em 1.75em',
        //backgroundSize: '50%',
        fontSize: '1.5rem',
        fontWeight: 800,
        textAlign: 'center'
    }
}));

const Resume = () => {
    
    const classes = useStyles()
    const theme = useTheme();
    const mobileMediaQuery = useMediaQuery(theme.breakpoints.down('sm'));

    const technicalResume = 'https://docs.google.com/document/d/1nX0phemIBT27nk94tikVEDVCJjJJZ-aLT9i6rTwIKhg/export?format=pdf'

    return (
        <div className={classes.root}>
            <Button className={classes.button} href={technicalResume} target="_blank" rel="noopener noreferrer" size='large'>
                Download Resume
            </Button>
            <div className={classes.root}>
                { mobileMediaQuery ? <MobileTimeline /> : <Timeline />}
            </div>
        </div>
    );
}

export default Resume