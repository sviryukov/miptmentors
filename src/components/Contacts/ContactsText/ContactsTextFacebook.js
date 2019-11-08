import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextFacebook: {
        paddingRight: '20px',
        fontSize: '30px',
        fontWeight: '600px',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    }
}));

const ContactsTextFacebook = () => {
    const classes = useStyles();
    return (
        <Link href='https://www.facebook.com/phystech/' target='_blank' className={classes.contactsTextFacebook}>
            facebook
        </Link>
    );
};

export {ContactsTextFacebook};