import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    newsItemHeader: {
        padding: "70px 0px 20px",
        fontSize: '30px',
        textAlign: 'left',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            padding: "80px 0px 20px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "100px 0px 20px",
        }
    }
}));

const NewsItemHeader = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              component={Typography} variant='h1'
              className={classes.newsItemHeader}>
            {props.text}
        </Grid>
    );
};

export {NewsItemHeader};