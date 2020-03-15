import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextSocialLink: {
        marginRight: '10px',
        fontSize: '30px',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    }
}));

const ContactsTextSocialLink = props => {
    const classes = useStyles();
    return (
        <Link href={props.href}
              target='_blank'
              className={classes.contactsTextSocialLink}
              style={props.style ? props.style : {}}>
            {props.text}
        </Link>
    );
};

export {ContactsTextSocialLink};