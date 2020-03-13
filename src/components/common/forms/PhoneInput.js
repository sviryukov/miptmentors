import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';
import {MaskedInput} from "./MaskedInput";

let useStyles = makeStyles(theme => ({
    shortTextField: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '45%',
            marginRight: '5%'
        }
    }
}));

const PhoneInput = props => {
    const classes = useStyles();
    return (
        <TextField label={(props.label || 'Телефон') + (props.required ? " *" : "")}
                   variant={props.variant || 'standard'}
                   margin='normal'
                   value={props.value}
                   onChange={event => props.handleChange(event.target.value)}
                   error={props.error}
                   InputProps={{
                       inputComponent: MaskedInput,
                       inputProps: {
                           mask: ['+', /\d/, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
                       }
                   }}
                   className={classes.shortTextField}/>
    );
};

export {PhoneInput};