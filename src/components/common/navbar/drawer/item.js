import React from 'react';
import { ListItem, Link, ListItemText } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

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
            <ListItemText primary={props.text} classes={{primary:classes.drawerItemText}}/>
        </ListItem>
    );
};