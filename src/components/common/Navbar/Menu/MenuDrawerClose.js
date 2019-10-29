import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, IconButton} from '@material-ui/core';
import {Close} from "@material-ui/icons";

const useStyles = makeStyles({
    menuDrawerCloseListItem: {
        width: '80px',
        height: '81px',
        padding: '16px',
        position: 'absolute',
        right: '0px',
        transition: 'top 0.4s'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <Box className={classes.menuDrawerCloseListItem}
                  style={{
                      top: props.drawerOpen ? '0px' : '81px'
                  }}>
            <IconButton onClick={props.handleDrawerCloseClick}>
                <Close size="medium"/>
            </IconButton>
        </Box>
    );
};