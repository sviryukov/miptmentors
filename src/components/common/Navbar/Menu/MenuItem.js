import React from 'react';
import {ListItem, Link, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    menuListItem: {
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        textAlign: 'center',
        textTransform: 'uppercase',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        },
        transition: 'color 0.2s'
    },
    menuListItemCurrent: {
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        paddingBottom: '6px',
        borderBottom: '2px solid',
        textAlign: 'center',
        textTransform: 'uppercase',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        },
        transition: 'color 0.2s'
    }
}));

const MenuItem = props => {
    const classes = useStyles();
    return (
        <ListItem className={props.current ? classes.menuListItemCurrent : classes.menuListItem}
                  component={Link}
                  href={props.href}
                  id={props.id}>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};

export {MenuItem};