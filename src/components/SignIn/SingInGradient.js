import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    singInGradient: {
        height: '0px',
        [theme.breakpoints.up('md')]: {
            height: '250px',
        },
        background: 'linear-gradient(45deg, ' + theme.palette.secondary.light + ', ' + theme.palette.secondary.dark + ')'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              className={classes.singInGradient}/>
    );
};