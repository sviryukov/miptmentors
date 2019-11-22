import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homeBlockHeader: {
        padding: '100px',
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: '100',
        [theme.breakpoints.up('md')]: {
            paddingBottom: '50px'
        },
        zIndex: 1
    },
    homeBlockHeaderLight: {
        paddingTop: '100px',
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: '100',
        color: theme.palette.text.light,
        [theme.breakpoints.up('md')]: {
            paddingBottom: '50px'
        },
        zIndex: 1
    }
}));

const HomeBlockHeader = props => {
    const classes = useStyles();
    return (
        <Grid component={Typography} variant='h2'
              item xs={12}
              className={props.light ? classes.homeBlockHeaderLight : classes.homeBlockHeader}>
            {props.text}
        </Grid>
    );
};

export {HomeBlockHeader};