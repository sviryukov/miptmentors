import React, {useEffect} from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';
let mojs;
let animation = {};

const useStyles = makeStyles(theme => ({
    listItem: {
        position: 'relative',
        width: 'auto',
        height: '102px',
        fontSize: '18px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: theme.palette.text.light,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default props => {
    const classes = useStyles();
    useEffect(() => {
        mojs = require('@mojs/core');
        animation[props.id] = require('./animation').build(props.id, document.getElementById(props.id).offsetWidth);
    }, []);
    const handleOnMouseEnter = () => {
        animation[props.id].replay();
    };
    return (
        <ListItem className={classes.listItem}
                  component={Link}
                  href={props.href}
                  id={props.id}
                  onMouseEnter={handleOnMouseEnter}>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};