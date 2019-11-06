import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    contactUsEmailField: {
        width: '100%'
    }
});

const ContactUsMessageField = () => {
    const classes = useStyles();
    return (
        <TextField label='Ваш вопрос'
                   type='text'
                   multiline
                   rows={5}
                   id='message'
                   name='message'
                   margin='normal'
                   variant='outlined'
                   className={classes.contactUsEmailField}/>
    );
};

export {ContactUsMessageField};