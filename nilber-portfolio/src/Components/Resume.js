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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        height: '100%',
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
    dateText: {
        fontWeight: 800,
        fontFamily: 'jost'
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
                            <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                                PURSUIT
                            </Typography>
                            <Typography variant='subtitle1'>Front-End Web Development Study Lead</Typography>
                            <Typography variant='body2'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Lead bi-weekly in-depth study conversations with 5-6 fellows on front-end, UI/UX design and styling'
                                    />
                                </ListItem>
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
                        <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                            ZONE 126 - FUND FOR THE CITY OF NY
                        </Typography>
                        <Typography variant='subtitle1'>Data Manager</Typography>
                        <Typography variant='body2'>
                            <List dense={'dense'}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Coordinate data analytics and data collection logistics across sites, programs and organizational partners.'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Provide data quality assurance management and perform and design quality controls'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Propose recommendations and implement protocols to streamline data processes, including establishing standard operating procedures (SOP)  and data management policies.'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Manage data entry staff and provide ongoing oversight of their performance. '
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Oversee organizational database management and assist in analyzing and reporting data.'
                                    />
                                </ListItem>
                            </List>
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