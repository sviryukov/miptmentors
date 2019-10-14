import React from 'react';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

let useStyles = makeStyles({
    textField: {
        width: '100%'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <TextField
            label='Email'
            type='text'
            id='email'
            name='username'
            autoComplete='email'
            margin='normal'
            variant='outlined'
            className={classes.textField}/>
    );
};