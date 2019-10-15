import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Link} from "@material-ui/core";
import Vk from "../../common/VkIcon";
import {Facebook, Telegram} from "@material-ui/icons";

let useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.text.secondary,
        fontSize: '30px',
        '&:hover': {
            color: theme.palette.text.link
        }
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <p>
            {props.vk &&
            <Link href={props.vk} target='_blanc'>
                <Vk className={classes.icon}/>
            </Link>}
            {props.facebook &&
            <Link href={props.facebook} target='_blanc'>
                <Facebook className={classes.icon}/>
            </Link>}
            {props.telegram &&
            <Link href={props.telegram} target='_blanc'>
                <Telegram className={classes.icon}/>
            </Link>}
        </p>
    );
};