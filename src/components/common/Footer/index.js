import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import ReturnToTop from "./ReturnToTop";
import FooterMenu from "./FooterMenu";
import PhystechUnionSocial from '../PhystechUnionSocial';

const useStyles = makeStyles(theme => ({
    footer: {
        width: 'calc(100% - 70px)',
        padding: '0px 50px 50px',
        [theme.breakpoints.up('md')]: {
            padding: '0px 80px 50px'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '50px 120px',
            fontSize: '17px'
        },
        backgroundColor: '#27282c'
    },
    footerMenuContainer: {
        paddingTop: '50px',
        order: 2,
        [theme.breakpoints.up('md')]: {
            order: 1
        }
    },
    footerSocialContainer: {
        paddingTop: '50px',
        color: '#fff',
        order: 1,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            order: 2,
            textAlign: 'right'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid container>
            <ReturnToTop/>
            <Grid container item className={classes.footer}>
                <Grid item xs={12} md={6} className={classes.footerMenuContainer}>
                    <FooterMenu/>
                </Grid>
                <Grid item xs={12} md={6} className={classes.footerSocialContainer}>
                    <PhystechUnionSocial.Vk/>
                    <PhystechUnionSocial.Facebook/>
                    <PhystechUnionSocial.Instagram/>
                    <PhystechUnionSocial.Telegram/>
                </Grid>
            </Grid>
        </Grid>
    );
}