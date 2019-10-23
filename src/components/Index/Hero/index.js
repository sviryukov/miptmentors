import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import HeroText from "./HeroText";
import HeroAnimation from "./HeroAnimation";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: 'auto',
        marginTop: '40px',
        padding: '50px 5% 50px',
        [theme.breakpoints.up('sm')]: {
            height: '550px',
            marginTop: '100px',
            padding: '0px 5%'
        },
        [theme.breakpoints.up('md')]: {
            height: 'calc(100% - 280px)',
            minHeight: '420px',
            maxHeight: '520px',
            padding: '0px 20px'
        },
        [theme.breakpoints.up('lg')]: {
            height: 'calc(100% - 280px)',
            minHeight: '480px',
            maxHeight: '720px'
        },
        [theme.breakpoints.up('xl')]: {
            height: 'calc(100% - 344px)',
            minHeight: '560px',
            maxHeight: '656px',
            marginTop: '150px'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid container justify='space-between' item xs={12} md={10} xl={9} className={classes.hero}>
            <HeroText/>
            <HeroAnimation/>
        </Grid>
    );
};