import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, Link} from '@material-ui/core';
import {PersonOutlineOutlined} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    MenuSignInListItem: {
        position: 'relative',
        width: '80px',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        zIndex: 1,
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        }
    },
    MenuSignInIcon: {
        margin: 'auto'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.MenuSignInListItem} component={Link} href='/signin'>
            <PersonOutlineOutlined size="medium" className={classes.MenuSignInIcon}/>
        </ListItem>
    );
};