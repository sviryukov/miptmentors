import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextFacebook: {
        paddingRight: '20px',
        fontSize: '30px',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Link href='#' className={classes.contactsTextFacebook}>
            facebook
        </Link>
    );
};