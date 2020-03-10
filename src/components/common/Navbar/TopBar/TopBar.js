import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Link} from '@material-ui/core';
import {TopBarIcon} from './TopBarIcon';

const useStyles = makeStyles(theme => ({
    topBar: {
        height: '40px',
        backgroundColor: theme.palette.text.primary,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    topBarLink: {
        lineHeight: '40px',
        color: theme.palette.secondary.contrastText,
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.secondary.light,
            textDecoration: 'none'
        }
    },
    topBarLinkIcon: {
        position: 'relative',
        top: '5px',
        left: '5px'
    }
}));

const TopBar = () => {
    const classes = useStyles();
    return (
        <Grid container
              item xs={12}
              className={classes.topBar}>
            <Link href='https://phystech-union.org/' target='_blank' className={classes.topBarLink}>
                Официальный сайт Физтех-Союза
                <TopBarIcon fontSize='small' color='inherit' className={classes.topBarLinkIcon}/>
            </Link>
        </Grid>
    );
};

export {TopBar};