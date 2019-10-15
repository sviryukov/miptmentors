import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import ListItem from "./LogoListItem";

const useStyles = makeStyles({
    logoContainer: {
        position: 'relative',
        top: '-100px',
        transition: 'top 0.5s 0.2s'
    }
});

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