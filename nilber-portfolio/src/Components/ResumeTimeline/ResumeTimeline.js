import React from 'react'

import { resumePosts } from './ResumePosts'

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

    },
    timeline: {
        width: '100%',
        minHeight: '100%',
        position: 'absolute',
        overflow: 'auto',
        margin: 0,
        '& *': {
            fontFamily: 'abel',
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
    list: {
        '& *' : {
            padding: 0
        }
    },
    dateText: {
        fontWeight: 800,
        fontFamily: 'jost'
    },
}));


const ResumeTimeline = () => {
    
    const classes = useStyles();

    let timeline = resumePosts.map( post => {
        
        let responsibilityList = post.responsibilities.map( responsibility => {         
            return (
                <List className={classes.list}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <StarIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary={
                        <Typography variant='body1'>
                            {responsibility}
                        </Typography>
                        }/>
                    </ListItem>
                </List>
        )})
        
        return (
        
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="h6" className={classes.dateText}>
                        {post.dates}
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
                            {post.organization}
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom={true}>{post.title}</Typography>
                        {responsibilityList}
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    })

    
    return (
        <Timeline className={classes.timeline} align="alternate">
            {timeline}
        </Timeline>
    )
}

export default ResumeTimeline
