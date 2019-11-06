import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextInstagram: {
        paddingRight: '20px',
        fontSize: '40px',
        fontFamily: 'billabong',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    }
}));

const ContactsTextInstagram = () => {
    const classes = useStyles();
    return (
        <Link href='https://www.instagram.com/phystechunion/' target='_blank' className={classes.contactsTextInstagram}>
            Instagram
        </Link>
    );
};

export {ContactsTextInstagram};