import React from 'react';
import {ListItem, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {PersonOutlineOutlined} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    listItem: {
        width: '80px',
        height: '102px'
    },
    icon: {
        color: theme.palette.text.light
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <IconButton href='/signin'>
                <PersonOutlineOutlined size="medium" className={classes.icon}/>
            </IconButton>
        </ListItem>
    );
};