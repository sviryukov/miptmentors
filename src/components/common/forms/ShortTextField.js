import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    shortTextField: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '45%',
            marginRight: '5%'
        }
    }
}));

const ShortTextField = props => {
    const classes = useStyles();
    return (
        <TextField label={props.label}
                   margin='normal'
                   name={props.name}
                   id={props.name}
                   className={classes.shortTextField}/>
    );
};

export {ShortTextField};