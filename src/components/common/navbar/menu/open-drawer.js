import React from 'react';
import {ListItem, IconButton} from '@material-ui/core';
import {MenuOutlined} from "@material-ui/icons";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
    listItem: {
        width: '80px',
        height: '102px'
    },
    icon: {
        boxShadow: 'none'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <IconButton onClick={props.handleClick}  className={classes.icon}>
                <MenuOutlined color='secondary' size="medium" />
            </IconButton>
        </ListItem>
    );
};