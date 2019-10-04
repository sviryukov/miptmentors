import React from 'react';
import {ListItem, Link, ListItemText, List, ListItemIcon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import SignInIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    signInText: {
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
                    <SignInIcon/>
                </ListItemIcon>
                <ListItemText primary='Войти' classes={{primary:classes.signInText}}/>
            </ListItem>
        </List>
    );
};