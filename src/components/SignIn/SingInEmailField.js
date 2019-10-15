import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    singInEmailField: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        width: '100%'
    }
});

export default props => {
    const classes = useStyles();
    const singInEmailField = useRef(null);
    useEffect(() => {
        singInEmailField.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        singInEmailField.current.style.opacity = 1;
        singInEmailField.current.style.top = '0px';
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
            className={classes.singInEmailField}
            ref={singInEmailField}/>
    );
};