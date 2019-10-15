import React from 'react';
import {ListItem, IconButton} from '@material-ui/core';
import {MenuOutlined} from "@material-ui/icons";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
    menuOpenDrawerListItem: {
        width: '80px',
        height: '81px'
    },
    menuOpenDrawerIcon: {
        color: theme.palette.text.light
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.menuOpenDrawerListItem}>
            <IconButton onClick={props.handleClick}>
                <MenuOutlined size="medium" className={classes.menuOpenDrawerIcon}/>
            </IconButton>
        </ListItem>
    );
};