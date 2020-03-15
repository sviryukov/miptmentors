import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageHeader: {
        padding: "70px 0px 40px",
        textAlign: 'center',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            padding: "80px 0px 40px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "100px 0px 40px",
        }
    }
}));

const PageHeader = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              component={Typography} variant='h1'
              className={classes.pageHeader}>
            {props.text}
        </Grid>
    );
};

export {PageHeader};