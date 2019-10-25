import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageHeaderContainer: {
        width: '100%',
        margin: "40px 0px",
        [theme.breakpoints.up('sm')]: {
            margin: "50px 0px"
        },
        [theme.breakpoints.up('lg')]: {
            margin: "70px 0px"
        },
        [theme.breakpoints.up('xl')]: {
            margin: "100px 0px"
        }
    },
    pageHeader: {
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center'
        },
        textTransform: 'uppercase',
        color: theme.palette.primary.main
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