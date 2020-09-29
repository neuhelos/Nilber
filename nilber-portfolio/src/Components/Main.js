import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid'

import About from './About'
import Resume from './ResumeTimeline/Resume'
import ProjectSkills from './ProjectsSkills/ProjectsSkills'

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        flex: 1
    },
    tabBar: {
        width: '100%',
        '& *': {
            fontSize: '1rem',
            fontFamily: 'jost'
        }
    },
    tabPanelContainer: {
        padding: theme.spacing(2),
        display: 'flex',
        width: '100%',
        flex: 1,
        height: '100%',
        position: 'relative'
    },
    selected: {
        color: '#FF0101"'
    }
}))

const TabPanel = (props) => {

    const classes = useStyles();
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
            style={{width: '100%', flex: 1, height: '100%'}}
        >
            {value === index && (
                <Grid item container className={classes.tabPanelContainer} direction="column" justify="center" alignItems="center">{children}</Grid>
            )}
        </div>
    );
}

const a11yProps = (index) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}


const Main = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
    <Grid container direction="column" justify="start" alignItems="center" className={classes.root}>
        <AppBar position="static" color="default" className={classes.tabBar}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant='fullWidth'
                aria-label="Tab Panel"
                TabIndicatorProps={{style: {backgroundColor: '#FF0101' , height: '0.5rem' }}}
            >
                <Tab label="About" classes={{selected: classes.selected}} {...a11yProps(0)} />
                <Tab label="Skills & Projects" classes={{selected: classes.selected}} {...a11yProps(1)} />
                <Tab label="Resume" classes={{selected: classes.selected}} {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <SwipeableViews
            style={{width: '100%', flex: 1}}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            containerStyle={{flex: 1, height: '100%'}}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <About />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ProjectSkills />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Resume />
                </TabPanel>
        </SwipeableViews>
    </Grid>
    );
}

export default Main

