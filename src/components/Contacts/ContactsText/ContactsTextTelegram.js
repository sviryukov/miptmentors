import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextTelegram: {
        fontSize: '30px',
        fontWeight: '100',
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
        <Link href='http://t.me/phystechunion' target='_blank' className={classes.contactsTextTelegram}>
            Telegram
        </Link>
    );
};