import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        backgroundColor: '#F5F5F5',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& *' : {
            fontFamily: 'jost'
        }
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000000',
        '&:hover': {
            color: '#A92521'
        },
        //marginRight: theme.spacing(3)
    },
    copyright: {
        '&:hover': {
            color: '#A92521',
        }
    }
}));

const Footer = () => {
    
    const classes = useStyles();

    return (

        <>
            <Divider style={{backgroundColor: 'transparent'}}/>
            <footer className={classes.root}>
                <Link href={`https://github.com/neuhelos`} className={classes.link} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    <Typography>GitHub</Typography>
                </Link>
                <Link href={`https://linkedin.com/in/nilberremon`} className={classes.link} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                    <Typography>LinkedIn</Typography>
                </Link>
                <Link href={`https://twitter.com/vallours`} className={classes.link} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                    <Typography>Twitter</Typography>
                </Link>
                <Typography className={classes.copyright} variant="body2" color="textSecondary" align='center'>
                    {'Copyright © '}{new Date().getFullYear()}
                </Typography>
            </footer>
        </>
    );
}

export default Footer