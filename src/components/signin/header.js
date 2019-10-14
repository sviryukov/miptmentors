import React from 'react';
import {Typography, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Lock} from '@material-ui/icons';

let useStyles = makeStyles(theme =>({
    header: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    icon: {
        width: '40px',
        margin: "auto",
        marginBottom: "10px",
        backgroundColor: theme.palette.secondary.main
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Typography variant='h4' className={classes.header}>
            <Avatar className={classes.icon}>
                <Lock/>
            </Avatar>
            Войти
        </Typography>
    );
};