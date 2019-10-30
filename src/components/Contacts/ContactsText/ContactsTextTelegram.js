import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextTelegram: {
        fontSize: '30px',
        fontWeight: '100',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Link href='http://t.me/phystechunion' target='_blanc' className={classes.contactsTextTelegram}>
            Telegram
        </Link>
    );
};