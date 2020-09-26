import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import StarIcon from '@material-ui/icons/Star';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        height: '100%',
        '& *': {
            fontFamily: 'abel'
        }
    },
    timeline: {
        width: '100%',
        minHeight: '100%',
        position: 'absolute',
        overflow: 'auto',
        margin: 0,
        '& *': {
            fontFamily: 'abel'
        }
    },
    timelineDot: {
        backgroundColor: '#000000',
        border: '4px solid #FFFFFF'
    },
    icon: {
        color: 'red',
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    dateText: {
        fontWeight: 800,
        fontFamily: 'abel'
    }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Timeline className={classes.timeline} align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="subtitle1" className={classes.dateText}>
                            JAN 2020 - Present
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                PURSUIT
                            </Typography>
                            <Typography variant='subtitle1'>Front-End Web Development Study Lead</Typography>
                            <Typography variant='body2'>
                                Lead bi-weekly in-depth study conversations with 5-6 fellows on front-end, UI/UX design and styling
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!
                        </Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Repeat
                        </Typography>
                        <Typography>
                            Because this is the life you love!
                        </Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}