import React, {useEffect, useRef} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import ListItem from "./list-item";

const useStyles = makeStyles(theme => ({
    logoContainer: {
        position: 'relative',
        top: '-100px',
        transition: 'top 0.5s 0.2s'
    }
}));

export default () => {
    const classes = useStyles();
    const logoContainer = useRef(null);
    useEffect(() => {
        logoContainer.current.style.top = '0px';
    });
    return (
        <Grid item className={classes.logoContainer} ref={logoContainer}>
            <ListItem/>
        </Grid>
    );
};