import React from "react";
import {makeStyles} from "@material-ui/styles";
import {ListItem, ListItemText} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerMenuListItem: {
        display: 'none',
        width: 'auto',
        paddingLeft: '3px',
        paddingRight: '3px',
        color: 'white',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.footerMenuListItem}>
            <ListItemText primary='|'/>
        </ListItem>
    );
}