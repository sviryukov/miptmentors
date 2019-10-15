import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, Link, ListItemText} from '@material-ui/core';

const useStyles = makeStyles({
    drawerItemText: {
        fontSize: '20px',
        color: 'rgba(0, 0, 0, 0.87)'
    }
});

export default (props) => {
    const classes = useStyles();
    return (
        <ListItem button component={Link} href={props.href}>
            <ListItemText primary={props.text} classes={{primary: classes.drawerItemText}}/>
        </ListItem>
    );
};