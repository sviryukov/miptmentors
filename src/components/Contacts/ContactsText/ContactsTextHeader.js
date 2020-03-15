import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextHeader: {
        margin: '30px 0px',
        fontSize: '20px',
        fontWeight: '100',
        color: theme.palette.secondary.contrastText
    }
}));

const ContactsTextHeader = props => {
    const classes = useStyles();
    return (
        <Typography className={classes.contactsTextHeader}>
            {props.text}
        </Typography>
    );
};

export {ContactsTextHeader};