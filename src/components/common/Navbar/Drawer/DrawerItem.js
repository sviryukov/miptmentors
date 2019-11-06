import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, Link, ListItemText} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawerListItem: {
        borderTop: '1px solid ' + theme.palette.background.paper,
        backgroundColor: theme.palette.background.default
    },
    drawerListItemText: {
        fontSize: '20px',
        color: 'rgba(0, 0, 0, 0.87)'
    }
}));

const DrawerItem = (props) => {
    const classes = useStyles();
    return (
        <ListItem button
                  component={Link}
                  href={props.href}
                  className={classes.drawerListItem}>
            <ListItemText primary={props.text} classes={{primary: classes.drawerListItemText}}/>
        </ListItem>
    );
};

export {DrawerItem};