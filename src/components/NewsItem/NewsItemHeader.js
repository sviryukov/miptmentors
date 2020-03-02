import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    newsItemHeaderContainer: {
        padding: "70px 0px 20px",
        [theme.breakpoints.up('md')]: {
            padding: "80px 0px 20px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "100px 0px 20px",
        }
    },
    newsItemHeader: {
        fontSize: '30px',
        textAlign: 'left',
        color: theme.palette.text.primary
    }
}));

const NewsItemHeader = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              className={classes.newsItemHeaderContainer}>
            <Typography variant='h1' className={classes.newsItemHeader}>
                {props.text}
            </Typography>
        </Grid>
    );
};

export {NewsItemHeader};