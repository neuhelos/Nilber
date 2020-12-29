import React from 'react'

import { resumePosts } from './ResumePosts'

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
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
        },
        padding: 0,
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
    },
}));

const MobileResumeTimeline = () => {
    
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
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <StarIcon className={classes.icon} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{paddingRight: 0}}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                            {post.organization}
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom={true}>{post.title}</Typography>
                        <Typography variant="subtitle1" className={classes.dateText}>
                            {post.dates}
                        </Typography>
                        {responsibilityList}
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            
        )
    })


    return (
        <Timeline className={classes.timeline}>
            {timeline}
                {/* <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{paddingRight: 0}}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                                PURSUIT
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom={true}>Front-End Web Development Study Lead</Typography>
                            <Typography variant="subtitle1" className={classes.dateText}>
                                JAN 2020 - PRESENT
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                    <Typography variant='body1'>
                                        Lead bi-weekly in-depth study conversations with 5-6 fellows on front-end, UI/UX design and styling
                                    </Typography>
                                    }/>
                                </ListItem>
                            </List>
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
                    <TimelineContent style={{paddingRight: 0}}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                                ZONE 126 - FUND FOR THE CITY OF NY
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom={true}>Data Manager</Typography>
                            <Typography variant='subtitle1' className={classes.dateText}>
                                JAN 2019 - PRESENT
                            </Typography>
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
                                                Coordinate data analytics and data collection logistics across sites, programs and organizational partners.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Provide data quality assurance management and perform and design quality controls
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Propose recommendations and implement protocols to streamline data processes, including establishing standard operating procedures (SOP)  and data management policies.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Manage data entry staff and provide ongoing oversight of their performance.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <StarIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Oversee organizational database management and assist in analyzing and reporting data.
                                            </Typography>
                                        }/>
                                    </ListItem>
                            </List>
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
                    <TimelineContent style={{paddingRight: 0}}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                            AIDS HEALTHCARE FOUNDATION
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom={true}>Associate Director of Quality & Operations</Typography>
                        <Typography variant='subtitle1' className={classes.dateText}>
                            FEB 2016 - DEC 2018
                        </Typography>
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
                                            Managed the national operations, logistics, purchasing and procurement, quality assurance, property, fleet and facilities matters, 
                                            administrative structures and processes of PHD, directing cross-regional PHD Operations Managers and Staff (10) that provided 
                                            service coverage domestically across the US.
                                        </Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <Typography variant='body1'>
                                            Oversaw the national development and expansion of PHD Operations’ scope and infrastructure
                                        </Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <Typography variant='body1'>
                                            Managed, developed and forecasted the PHD Operations department budget of $1.3 million.
                                        </Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <Typography variant='body1'>
                                            Supported the strategic direction of the organization designing centralized SOPs and policies.
                                        </Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <Typography variant='body1'>
                                            Oversee organizational database management and assist in analyzing and reporting data.
                                        </Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <Typography variant='body1'>
                                            Provided cross-functional management in coordinating the ongoing integration of departments, functions 
                                            and platforms through the alignment of standards, models and initiatives while building peer 
                                            relationships and consensus across the organization; Provided continual reporting and evaluation to PHD 
                                            Leadership
                                        </Typography>
                                    }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <Typography variant='body1'>
                                            Managed and conducted site/facility quality assurance and operational visits to all PHD Sites and 
                                            Programs as well as providing Operations-driven training and development to PHD Management and 
                                            Staff nationally.
                                        </Typography>
                                    }/>
                                </ListItem>
                        </List>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent style={{paddingRight: 0}}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                                AIDS HEALTHCARE FOUNDATION
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom={true}>Operations Manager</Typography>
                            <Typography variant='subtitle1' className={classes.dateText}>
                                MAR 2013 - JAN 2016
                            </Typography>
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
                                                Managed the day-to-day operations, logistics and quality assurance structures and processes of 
                                                AHF’s Public Health Division for all Programs and Sites in the Eastern US, including inventory 
                                                management, distribution and logistics  and office administrative and facilities and properties 
                                                management and functions.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Managed and coordinated data reporting and analysis, including deliverables reporting for grant funding for multiple sites 
                                                and programs. Generated and compiled reporting on organizational metrics and performance.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Assisted in directing PHD’s procurement and purchasing activities and managing vendor relationships.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Managed and developed PHD’s national resource management and order fulfillment system for supplying site and program needs and tracking resource utilization.
                                            </Typography>
                                        }/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <StarIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <Typography variant='body1'>
                                                Developed and coached PHD Operations Teams based on strength and needs assessment and organizational capacity-building; helped to develop talent acquisition tools and an onboarding program.
                                            </Typography>
                                        }/>
                                    </ListItem>
                            </List>
                        </Paper>
                    </TimelineContent>
                </TimelineItem> */}
            </Timeline>
    )
}

export default MobileResumeTimeline
