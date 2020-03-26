import React from 'react';
import {makeStyles} from "@material-ui/styles";
import theme from '../../theme';
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageHeader: {
        padding: "70px 0px 40px",
        textAlign: 'center',
        fontSize: '40px',
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
              component={Typography} variant={props.variant || 'h1'}
              className={classes.pageHeader}
              style={{ color: theme.palette.text[props.color || 'primary']}}>
            {props.text}
        </Grid>
    );
};

export {PageHeader};