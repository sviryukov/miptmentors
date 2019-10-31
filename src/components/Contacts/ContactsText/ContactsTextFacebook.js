import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextFacebook: {
        paddingRight: '20px',
        fontSize: '30px',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Link href='https://www.facebook.com/phystech/' className={classes.contactsTextFacebook}>
            facebook
        </Link>
    );
};