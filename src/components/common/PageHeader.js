import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageHeaderContainer: {
        width: '100%',
        paddingTop: "30px",
        paddingBottom: "60px",
        backgroundImage: 'url(/img/header-bg.svg)',
        backgroundPositionX: 'center',
        [theme.breakpoints.up('sm')]: {
            marginBottom: "40px",
            paddingTop: "20px",
            paddingBottom: "80px"
        },
        [theme.breakpoints.up('xl')]: {
            backgroundSize: 'cover'
        }
    },
    pageHeader: {
        height: '35px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: theme.palette.secondary.main
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