import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";
import {CountUp} from "../common/Countup";

const useStyles = makeStyles({
    homeCountUp: {
        width: '100%',
        fontSize: '65px',
        textAlign: 'center'
    },
    homeCountUpText: {
        width: '100%',
        maxWidth: '262px',
        margin: 'auto',
        fontSize: '18px',
        textAlign: 'center'
    }
});

const HomeCountUp = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4} md={3} xl={2}>
            <CountUp final={props.finalValue}
                     interval={props.interval}
                     className={classes.homeCountUp}/>
            <Typography className={classes.homeCountUpText}>
                {props.children}
            </Typography>
        </Grid>
    );
};

export {HomeCountUp};