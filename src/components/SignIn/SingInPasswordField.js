import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    singInPasswordField: {
        width: '100%'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <TextField label='Пароль'
                   type='password'
                   id='password'
                   name='password'
                   autoComplete='current-password'
                   margin='normal'
                   variant='outlined'
                   className={classes.singInPasswordField}/>
    );
};