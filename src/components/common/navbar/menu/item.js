import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    listItem: {
        width: 'auto',
        height: '102px',
        fontSize: '18px',
        color: theme.palette.secondary.main,
        textAlign: 'center'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem} component={Link} href={props.href}>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};