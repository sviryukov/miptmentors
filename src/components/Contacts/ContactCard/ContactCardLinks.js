import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Link} from "@material-ui/core";

let useStyles = makeStyles(theme => ({
    link: {
        color: theme.palette.text.link
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <p>
            <Link href={'mailto:' + props.email} target='_blanc' className={classes.link}>{props.email}</Link>
            <br/>
            <Link href={'tel:' + props.phone} target='_blanc' className={classes.link}>{props.phone}</Link>
        </p>
    );
};