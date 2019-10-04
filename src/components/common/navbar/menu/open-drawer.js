import React from 'react';
import {ListItem, Fab} from '@material-ui/core';
import {Menu} from "@material-ui/icons";
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
            <Fab onClick={props.handleClick} color='secondary' size='medium' className={classes.icon}>
                <Menu/>
            </Fab>
        </ListItem>
    );
};