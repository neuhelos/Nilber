import React from 'react'

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

    
    return (
        <Timeline className={classes.timeline} align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h6" className={classes.dateText}>
                            JAN 2020 - PRESENT
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
                            <Typography variant='subtitle1' gutterBottom={true}>Front-End Web Development Study Lead</Typography>
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
                    <TimelineOppositeContent>
                            <Typography variant="h6" className={classes.dateText}>
                                JAN 2019 - PRESENT
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
                            ZONE 126 - FUND FOR THE CITY OF NY
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom={true}>Data Manager</Typography>
                        <Typography variant='body2' className={classes.list}>
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
                                    primary='Manage data entry staff and provide ongoing oversight of their performance.'
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
                        </Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                            <Typography variant="h6" className={classes.dateText}>
                                FEB 2016 - DEC 2018
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
                            AIDS HEALTHCARE FOUNDATION
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom={true}>Associate Director of Quality & Operations</Typography>
                        <Typography variant='body2' align='start' className={classes.list}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Managed the national operations, logistics, purchasing and procurement, quality assurance, property, fleet and facilities matters, administrative structures and processes of PHD, directing cross-regional PHD Operations Managers and Staff (10) that provided service coverage domestically across the US.'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Oversaw the national development and expansion of PHD Operations’ scope and infrastructure'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Managed, developed and forecasted the PHD Operations department budget of $1.3 million.'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <StarIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Supported the strategic direction of the organization designing centralized SOPs and policies.'
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
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Provided cross-functional management in coordinating the ongoing integration of departments, functions and platforms through the alignment of standards, models and initiatives while building peer relationships and consensus across the organization; Provided continual reporting and evaluation to PHD Leadership'
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StarIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary='Managed and conducted site/facility quality assurance and operational visits to all PHD Sites and Programs as well as providing Operations-driven training and development to PHD Management and Staff nationally.'
                                    />
                                </ListItem>
                        </Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h6" className={classes.dateText}>
                            MAR 2013 - JAN 2016
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}>
                            <StarIcon className={classes.icon} />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1" style={{fontWeight: 800}}>
                                AIDS HEALTHCARE FOUNDATION
                            </Typography>
                            <Typography variant='subtitle1' gutterBottom={true}>Operations Manager</Typography>
                            <Typography variant='body2' className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary='Managed the day-to-day operations, logistics and quality assurance structures and processes of AHF’s Public Health Division for all Programs and Sites in the Eastern US, including inventory management, distribution and logistics  and office administrative and facilities and properties management and functions.'
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary='Managed and coordinated data reporting and analysis, including deliverables reporting for grant funding for multiple sites and programs. Generated and compiled reporting on organizational metrics and performance.'
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary='Assisted in directing PHD’s procurement and purchasing activities and managing vendor relationships.'
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                            <StarIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary='Managed and developed PHD’s national resource management and order fulfillment system for supplying site and program needs and tracking resource utilization.'
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <StarIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary='Developed and coached PHD Operations Teams based on strength and needs assessment and organizational capacity-building; helped to develop talent acquisition tools and an onboarding program.'
                                        />
                                    </ListItem>
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
    )
}

export default ResumeTimeline
