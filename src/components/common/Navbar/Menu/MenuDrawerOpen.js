import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, IconButton} from '@material-ui/core';
import {MenuOutlined} from "@material-ui/icons";

const useStyles = makeStyles({
    menuDrawerOpenListItem: {
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
        <Box className={classes.menuDrawerOpenListItem}
                  style={{
                      top: props.drawerOpen ? '-81px' : '0px'
                  }}>
            <IconButton onClick={props.handleDrawerOpenClick}>
                <MenuOutlined size="medium"/>
            </IconButton>
        </Box>
    );
};