import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    singInPasswordField: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        width: '100%'
    }
});

export default props => {
    const classes = useStyles();
    const singInPasswordField = useRef(null);
    useEffect(() => {
        singInPasswordField.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        singInPasswordField.current.style.opacity = 1;
        singInPasswordField.current.style.top = '0px';
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
            className={classes.singInPasswordField}
            ref={singInPasswordField}/>
    );
};