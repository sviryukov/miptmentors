import React from 'react';
import {ListItem, ListItemText, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    menuContacts: {
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        textAlign: 'right'
    },
    menuContactsLink: {
        fontSize: '14px',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.menuContacts}>
            <ListItemText>
                <Link href='tel:+79250479358'
                      className={classes.menuContactsLink}>
                    +7 (925) 047-93-58
                </Link>
                <br/>
                <Link href='mailto:sviryukov.k@phystech.edu'
                      className={classes.menuContactsLink}>
                    sviryukov.k@phystech.edu
                </Link>
            </ListItemText>
        </ListItem>
    );
};