import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {FooterContactsMenuSocial} from "./FooterContactsMenuSocial";
import {FooterMenuLink} from "./FooterMenuLink";

const useStyles = makeStyles(theme => ({
    footerContactsMenu: {
        paddingTop: '21px',
        [theme.breakpoints.up('md')]: {
            textAlign: 'right'
        }
    }
}));

const FooterContactsMenu = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={3} lg={2} className={classes.footerContactsMenu}>
            <FooterContactsMenuSocial/>
            <FooterMenuLink href='tel:+79166509953' text='+7 (916) 650-99-53'/>
            <FooterMenuLink href='mailto:dm@phystechunion.org' text='dm@phystechunion.org'/>
        </Grid>
    );
};

export {FooterContactsMenu};