import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';
import {FadeFromBottom} from "../common/animations";

let useStyles = makeStyles({
    singInPasswordField: {
        width: '100%'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <FadeFromBottom component={TextField}
                        delay={props.animation_delay}
                        label='Пароль'
                        type='password'
                        id='password'
                        name='password'
                        autoComplete='current-password'
                        margin='normal'
                        variant='outlined'
                        className={classes.singInPasswordField}/>
    );
};