import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageHeaderContainer: {
        width: '100%',
        padding: "70px 0px 50px",
        [theme.breakpoints.up('md')]: {
            padding: "80px 0px 40px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "100px 0px 60px",
        }
    },
    pageHeader: {
        textAlign: 'center',
        color: theme.palette.text.primary
    }
}));

const PageHeader = props => {
    const classes = useStyles();
    return (
        <div className={classes.pageHeaderContainer}>
            <Typography variant='h1' className={classes.pageHeader}>
                {props.text}
            </Typography>
        </div>
    );
};

export {PageHeader};