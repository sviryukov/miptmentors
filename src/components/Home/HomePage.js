import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homePage: {
        borderTop: '1px solid ' + theme.palette.divider,
        padding: '100px 0px',
        [theme.breakpoints.up('lg')]: {
            padding: '150px 0px'
        },
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper
    }
}));

const HomePage = props => {
    const classes = useStyles();
    return (
        <Grid container
              className={classes.homePage}>
            {props.children}
        </Grid>
    );
};

export {HomePage};