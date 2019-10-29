import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

let useStyles = makeStyles({
    page: {
        position: 'relative',
        minHeight: 'calc(100% - 135px)',
        paddingBottom: '100px'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <Grid container justify='center' className={classes.page}>
            {props.children}
        </Grid>
    );
};