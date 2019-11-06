import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    contactUsEmailField: {
        width: '100%'
    }
});

const ContactUsEmailField = () => {
    const classes = useStyles();
    return (
        <TextField label='Email'
                   type='text'
                   id='email'
                   name='username'
                   autoComplete='email'
                   margin='normal'
                   variant='outlined'
                   className={classes.contactUsEmailField}/>
    );
};

export {ContactUsEmailField};