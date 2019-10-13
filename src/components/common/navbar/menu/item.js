import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    listItem: {
        position: 'relative',
        width: 'auto',
        height: '102px',
        fontSize: '18px',
        textAlign: 'center',
        textTransform: 'uppercase',
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
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}
                  component={Link}
                  href={props.href}
                  id={props.id}>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};