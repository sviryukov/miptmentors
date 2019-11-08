import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homeBlockHeader: {
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: '100',
        [theme.breakpoints.up('md')]: {
            paddingBottom: '50px'
        }
    }
}));

const HomeBlockHeader = props => {
    const classes = useStyles();
    return (
        <Grid component={Typography} variant='h2'
              item xs={12}
              className={classes.homeBlockHeader}>
            {props.text}
        </Grid>
    );
};

export {HomeBlockHeader};