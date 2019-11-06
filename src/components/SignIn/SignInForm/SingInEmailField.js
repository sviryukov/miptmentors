import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    singInEmailField: {
        width: '100%'
    }
});

const SignInEmailField = () => {
    const classes = useStyles();
    return (
        <TextField label='Email'
                   type='text'
                   id='email'
                   name='username'
                   autoComplete='email'
                   margin='normal'
                   variant='outlined'
                   className={classes.singInEmailField}/>
    );
};

export {SignInEmailField};