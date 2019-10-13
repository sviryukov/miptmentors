import React from 'react';
import {ListItem, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {PersonOutlineOutlined} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    listItem: {
        width: '80px',
        height: '102px'
    },
    iconButton: {
        color: theme.palette.text.light,
        transition: 'all 0.4s',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <IconButton href='/signin' className={classes.iconButton}>
                <PersonOutlineOutlined size="medium"/>
            </IconButton>
        </ListItem>
    );
};