import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles({
    homeBlockLinkContainer: {
        textAlign: 'center'
    },
    homeBlockLink: {
        fontSize: '22px',
        fontWeight: 'normal',
        color: '#1976d2'
    }
});

const HomeBlockLink = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              className={classes.homeBlockLinkContainer}>
            <Link href={props.href} className={classes.homeBlockLink}>
                {props.text}
            </Link>
        </Grid>
    );
};

export {HomeBlockLink};