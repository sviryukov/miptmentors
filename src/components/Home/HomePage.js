import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homePage: {
        borderTop: '1px solid ' + theme.palette.divider,
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