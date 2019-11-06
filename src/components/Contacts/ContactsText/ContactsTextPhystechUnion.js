import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextPhystechUnion: {
        fontSize: '20px',
        fontWeight: '100',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    },
    contactsTextPhystechUnionIcon: {
        position: 'relative',
        top: '5px',
        left: '5px'
    }
}));

const ContactsTextPhystechUnion = () => {
    const classes = useStyles();
    return (
        <Link href='http://phystechunion.org' target='_blank'
              className={classes.contactsTextPhystechUnion}>
            phystech&#8209;union.org
        </Link>
    );
};

export {ContactsTextPhystechUnion};