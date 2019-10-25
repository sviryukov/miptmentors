import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, IconButton} from '@material-ui/core';
import {MenuOutlined} from "@material-ui/icons";

const useStyles = makeStyles( theme => ({
    menuOpenDrawerListItem: {
        width: '80px',
        height: '81px'
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