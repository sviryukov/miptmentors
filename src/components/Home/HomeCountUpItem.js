import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";
import {CountUp} from "../common/Countup";

const useStyles = makeStyles({
    homeCountUpItemContainer: {
        height: 'fit-content'
    },
    homeCountUpItem: {
        width: '100%',
        fontWeight: '100',
        fontSize: '65px',
        textAlign: 'center'
    },
    homeCountUpItemText: {
        width: '100%',
        maxWidth: '262px',
        margin: 'auto',
        fontWeight: '100',
        fontSize: '18px',
        textAlign: 'center'
    }
});

const HomeCountUpItem = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4} md={3} xl={2}
              className={classes.homeCountUpItemContainer}>
            <CountUp finalValue={props.finalValue}
                     interval={props.interval}
                     className={classes.homeCountUpItem}/>
            <Typography className={classes.homeCountUpItemText}>
                {props.text}
            </Typography>
        </Grid>
    );
};

export {HomeCountUpItem};