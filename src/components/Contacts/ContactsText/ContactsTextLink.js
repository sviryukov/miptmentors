import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextLink: {
        fontSize: '20px',
        fontWeight: '100',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    }
}));

const ContactsTextLink = props => {
    const classes = useStyles();
    return (
        <Link href={props.href} target='_blank' className={classes.contactsTextLink}>
            {props.text}
        </Link>
    );
};

export {ContactsTextLink};