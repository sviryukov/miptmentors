import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    signInHeader: {
        marginBottom: '20px',
        fontWeight: '100'
    },
    signInHeaderIcon: {
        width: '40px',
        margin: "auto",
        marginBottom: "10px",
        backgroundColor: theme.palette.secondary.main
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Typography variant='h4'
                    className={classes.signInHeader}>
            Войти
        </Typography>
    );
};