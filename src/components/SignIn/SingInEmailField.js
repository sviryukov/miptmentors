import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';
import {FadeFromBottom} from "../common/animations";

let useStyles = makeStyles({
    singInEmailField: {
        width: '100%'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <FadeFromBottom component={TextField}
                        delay={props.animation_delay}
                        label='Email'
                        type='text'
                        id='email'
                        name='username'
                        autoComplete='email'
                        margin='normal'
                        variant='outlined'
                        className={classes.singInEmailField}/>
    );
};