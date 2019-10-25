import React from 'react';
import {ListItem, Link, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    menuListItem: {
        position: 'relative',
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        },
        textAlign: 'center',
        textTransform: 'uppercase',
        color: theme.palette.text.light,
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main
        }
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.menuListItem}
                  component={Link}
                  href={props.href}
                  id={props.id}>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};