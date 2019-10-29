import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles({
    contactUsEmailField: {
        width: '100%'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <TextField type='text'
                   multiline
                   rows={5}
                   id='message'
                   name='message'
                   placeholder='Ваш вопрос'
                   margin='normal'
                   variant='outlined'
                   className={classes.contactUsEmailField}/>
    );
};