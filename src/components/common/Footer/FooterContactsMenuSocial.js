import React from "react";
import {makeStyles} from "@material-ui/styles";
import {VkIcon} from "../VkIcon";
import {Facebook, Instagram, Telegram} from "@material-ui/icons";
import {Box, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    phystechUnionSocialLink: {
        marginRight: '10px',
        [theme.breakpoints.up('md')]: {
            marginRight: '0px',
            marginLeft: '10px'
        },
        transition: 'color 0.1s',
        color: '#d9d9d9',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        },
        fontSize: '30px'
    }
}));

const FooterContactsMenuSocial = () => {
    const classes = useStyles();
    return (
        <Box>
            <Link href='https://www.facebook.com/phystech/' target='_blank' className={classes.phystechUnionSocialLink}>
                <Facebook/>
            </Link>
            <Link href='https://vk.com/phystechunion' target='_blank' className={classes.phystechUnionSocialLink}>
                <VkIcon/>
            </Link>
            <Link href='https://www.instagram.com/phystechunion/' target='_blank' className={classes.phystechUnionSocialLink}>
                <Instagram/>
            </Link>
            <Link href='http://t.me/phystechunion' target='_blank' className={classes.phystechUnionSocialLink}>
                <Telegram/>
            </Link>
        </Box>
    );
};

export {FooterContactsMenuSocial};