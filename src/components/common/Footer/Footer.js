import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {FooterMainMenu} from "./FooterMainMenu";
import {FooterJoinMenu} from "./FooterJoinMenu";
import {FooterLegalMenu} from "./FooterLegalMenu";
import {FooterContactsMenu} from "./FooterContactsMenu";

const useStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        padding: '50px 50px 20px',
        justifyContent: 'center',
        backgroundColor: theme.palette.text.primary,
        fontSize: '15px'
    },
    footerContactsMenuContainer: {
        paddingTop: '30px',
        [theme.breakpoints.up('md')]: {
            textAlign: 'right'
        }
    },
    footerCopyright: {
        paddingTop: '65px',
        color: theme.palette.secondary.contrastText,
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center'
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container item className={classes.footer}>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <FooterMainMenu/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <FooterJoinMenu/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <FooterLegalMenu/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}
                      className={classes.footerContactsMenuContainer}>
                    <FooterContactsMenu/>
                </Grid>
                <Grid item xs={12} lg={8}
                      className={classes.footerCopyright}>
                    © 2019 Физтех-Союз
                </Grid>
            </Grid>
        </Grid>
    );
};

export {Footer};