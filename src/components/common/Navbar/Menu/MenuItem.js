import React from 'react';
import {ListItem, Link, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    menuListItem: {
        padding: '8px 16px',
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: 'color 0.2s',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        }
    },
    menuListItemCurrent: {
        padding: '8px 16px',
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        paddingBottom: '6px',
        borderBottom: '2px solid',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: 'color 0.2s',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        }
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