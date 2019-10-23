import React from "react";
import {makeStyles} from "@material-ui/styles";
import {ListItem, Link, ListItemText} from "@material-ui/core";

const useStyles = makeStyles({
    footerMenuListItem: {
        width: 'auto',
        paddingLeft: '3px',
        paddingRight: '3px',
        color: 'white'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.footerMenuListItem}
                  component={Link}
                  href={props.href}>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
}