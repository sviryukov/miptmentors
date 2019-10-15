import React from 'react';
import {ListItem, Link, ListItemText, List, ListItemIcon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {PersonOutlineOutlined} from '@material-ui/icons';

const useStyles = makeStyles({
    drawerSignInText: {
        fontSize: '20px',
        color: 'rgba(0, 0, 0, 0.87)'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <List>
            <ListItem button component={Link} href='/signin'>
                <ListItemIcon>
                    <PersonOutlineOutlined/>
                </ListItemIcon>
                <ListItemText primary='Войти' classes={{primary:classes.drawerSignInText}}/>
            </ListItem>
        </List>
    );
};