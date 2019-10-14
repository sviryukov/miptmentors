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
    const emailField = useRef(null);
    useEffect(() => {
        emailField.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        emailField.current.style.opacity = 1;
        emailField.current.style.top = '0px';
    });
    return (
        <TextField
            label='Email'
            type='text'
            id='email'
            name='username'
            autoComplete='email'
            margin='normal'
            variant='outlined'
            className={classes.textField}
            ref={emailField}/>
    );
};