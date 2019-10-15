import React from 'react'
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HeroText from "./HeroText";
import HeroAnimation from "./HeroAnimation";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: 'auto',
        marginTop: '40px',
        padding: '50px 5% 150px',
        [theme.breakpoints.up('sm')]: {
            height: '650px',
            marginTop: '100px',
            padding: '0px 5%'
        },
        [theme.breakpoints.up('md')]: {
            height: 'calc(100% - 180px)',
            minHeight: '520px',
            maxHeight: '620px',
            padding: '0px 20px'
        },
        [theme.breakpoints.up('lg')]: {
            height: 'calc(100% - 180px)',
            minHeight: '580px',
            maxHeight: '820px'
        },
        [theme.breakpoints.up('xl')]: {
            height: 'calc(100% - 244px)',
            minHeight: '660px',
            maxHeight: '756px',
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