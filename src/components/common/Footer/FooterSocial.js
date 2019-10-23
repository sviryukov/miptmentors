import React from "react";
import {makeStyles} from "@material-ui/styles";
import Vk from "../../common/VkIcon";
import {Facebook, Instagram, Telegram} from "@material-ui/icons";
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerSocialLink: {
        paddingLeft: '10px',
        paddingRight: '10px',
        color: theme.palette.text.light,
        fontSize: '30px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Link href='https://vk.com/phystechunion' target='_blanc' className={classes.footerSocialLink}>
                <Vk/>
            </Link>
            <Link href='https://www.facebook.com/phystech/' target='_blanc' className={classes.footerSocialLink}>
                <Facebook/>
            </Link>
            <Link href='https://www.instagram.com/phystechunion/' target='_blanc' className={classes.footerSocialLink}>
                <Instagram/>
            </Link>
            <Link href='http://t.me/phystechunion' target='_blanc' className={classes.footerSocialLink}>
                <Telegram/>
            </Link>
        </React.Fragment>
    );
}