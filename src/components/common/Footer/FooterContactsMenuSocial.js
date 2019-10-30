import React from "react";
import {makeStyles} from "@material-ui/styles";
import Vk from "../VkIcon";
import {Facebook, Instagram, Telegram} from "@material-ui/icons";
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    phystechUnionSocialLink: {
        paddingRight: '10px',
        [theme.breakpoints.up('md')]: {
            paddingRight: '0px',
            paddingLeft: '10px'
        },
        color: 'inherit',
        fontSize: '30px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Link href='https://www.facebook.com/phystech/' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Facebook/>
            </Link>
            <Link href='https://vk.com/phystechunion' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Vk/>
            </Link>
            <Link href='https://www.instagram.com/phystechunion/' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Instagram/>
            </Link>
            <Link href='http://t.me/phystechunion' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Telegram/>
            </Link>
        </React.Fragment>
    );
};