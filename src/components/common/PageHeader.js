import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageHeaderContainer: {
        width: '100%',
        marginBottom: "70px",
        padding: "30px 0px",
        [theme.breakpoints.up('md')]: {
            padding: "50px 0px",
        },
        background: 'linear-gradient(45deg, #52aa96, #52aa52)'
    },
    pageHeader: {
        textAlign: 'center',
        color: theme.palette.text.light
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <div className={classes.pageHeaderContainer}>
            <Typography variant='h1' className={classes.pageHeader}>
                {props.text}
            </Typography>
        </div>
    );
};