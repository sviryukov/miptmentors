import React from 'react';
import {ListItem, Fab} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Person} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    listItem: {
        width: '80px',
        height: '102px'
    },
    icon: {
        boxShadow: 'none'}
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <Fab href='/signin' color='secondary' size='medium' className={classes.icon}>
                <Person/>
            </Fab>
        </ListItem>
    );
};