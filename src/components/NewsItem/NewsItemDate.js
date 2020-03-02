import React from 'react';
import {makeStyles} from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { dateFormat } from "../common/dateFormat";

const useStyles = makeStyles(theme => ({
    newsItemDate: {
        paddingBottom: "20px",
        fontSize: '18px',
        color: theme.palette.text.secondary
    }
}));

const NewsItemDate = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              className={classes.newsItemDate}>
            {dateFormat(props.date)}
        </Grid>
    );
};

export {NewsItemDate};