import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

let useStyles = makeStyles({
    signInHeader: {
        marginBottom: '20px',
        fontWeight: '100'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Typography variant='h4'
                    className={classes.signInHeader}>
            Войти
        </Typography>
    );
};