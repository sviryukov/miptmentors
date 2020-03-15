import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles({
    homeBlockLinkContainer: {
        textAlign: 'center',
        fontSize: '22px',
        color: '#1976d2'
    }
});

const HomeBlockLink = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              component={Link} href={props.href}
              className={classes.homeBlockLinkContainer}>
            {props.text}
        </Grid>
    );
};

export {HomeBlockLink};