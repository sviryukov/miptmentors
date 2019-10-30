import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextVk: {
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
        <Link href='https://vk.com/phystechunion' target='_blanc' className={classes.contactsTextVk}>
            ВКонтакте
        </Link>
    );
};