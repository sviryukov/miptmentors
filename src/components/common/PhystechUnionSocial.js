import React from "react";
import {makeStyles} from "@material-ui/styles";
import Vk from "./VkIcon";
import {Facebook, Instagram, Telegram} from "@material-ui/icons";
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
    phystechUnionSocialLink: {
        paddingLeft: '10px',
        paddingRight: '10px',
        color: 'inherit',
        fontSize: '30px'
    }
});

export default {
    Vk: () => {
        const classes = useStyles();
        return (
            <Link href='https://vk.com/phystechunion' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Vk/>
            </Link>
        );
    },
    Facebook: () => {
        const classes = useStyles();
        return (
            <Link href='https://www.facebook.com/phystech/' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Facebook/>
            </Link>
        );
    },
    Instagram: () => {
        const classes = useStyles();
        return (
            <Link href='https://www.instagram.com/phystechunion/' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Instagram/>
            </Link>
        );
    },
    Telegram: () => {
        const classes = useStyles();
        return (
            <Link href='http://t.me/phystechunion' target='_blanc' className={classes.phystechUnionSocialLink}>
                <Telegram/>
            </Link>
        );
    }
}