import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextInstagram: {
        paddingRight: '20px',
        fontSize: '40px',
        fontFamily: 'billabong',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Link href='https://www.instagram.com/phystechunion/' target='_blanc' className={classes.contactsTextInstagram}>
            Instagram
        </Link>
    );
};