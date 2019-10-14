import React from 'react';
import {Link, ListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {PersonOutlineOutlined} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    listItem: {
        position: 'relative',
        width: '80px',
        height: '102px',
        zIndex: 1,
        color: theme.palette.text.light,
        transition: 'all 0.4s',
        '&::after': {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            margin: 'auto',
            width: '100%',
            height: '1px',
            content: "'.'",
            color: 'transparent',
            background: theme.palette.secondary.main,
            visibility: 'none',
            opacity: 0,
            zIndex: '-1',
            transition: 'all 0.4s'
        },
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
            '&::after': {
                opacity: 1,
                visibility: 'visible',
                height: '100%'
            }
        }
    },
    icon: {
        margin: 'auto'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem} component={Link} href='/signin'>
            <PersonOutlineOutlined size="medium" className={classes.icon}/>
        </ListItem>
    );
};