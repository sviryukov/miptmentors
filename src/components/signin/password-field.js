import React, {useEffect, useRef} from 'react';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

let useStyles = makeStyles({
    textField: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        width: '100%'
    }
});

export default props => {
    const classes = useStyles();
    const passwordField = useRef(null);
    useEffect(() => {
        passwordField.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        passwordField.current.style.opacity = 1;
        passwordField.current.style.top = '0px';
    });
    return (
        <TextField
            label='Пароль'
            type='password'
            id='password'
            name='password'
            autoComplete='current-password'
            margin='normal'
            variant='outlined'
            className={classes.textField}
            ref={passwordField}/>
    );
};