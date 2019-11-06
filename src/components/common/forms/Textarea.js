import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    textarea: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '95%',
            marginRight: '5%'
        }
    }
}));

const Textarea = props => {
    const classes = useStyles();
    return (
        <TextField label={props.label}
                   multiline
                   rows={2}
                   margin='normal'
                   name={props.name}
                   id={props.name}
                   className={classes.textarea}/>
    );
};

export {Textarea};