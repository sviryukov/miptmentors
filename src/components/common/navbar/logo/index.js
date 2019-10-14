import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import ListItem from "./list-item";

const useStyles = makeStyles(theme => ({
    logoContainer: {

    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item className={classes.logoContainer}>
            <ListItem/>
        </Grid>
    );
};