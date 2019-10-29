import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import HeroText from "./HeroText";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: 'auto',
        padding: '50px 5% 50px',
        [theme.breakpoints.up('sm')]: {
            height: '510px',
            marginTop: '100px',
            padding: '0px 5%'
        },
        [theme.breakpoints.up('md')]: {
            height: 'calc(100% - 280px)',
            minHeight: '380px',
            maxHeight: '480px',
            padding: '0px 20px'
        },
        [theme.breakpoints.up('lg')]: {
            height: 'calc(100% - 320px)',
            minHeight: '440px',
            maxHeight: '680px'
        },
        [theme.breakpoints.up('xl')]: {
            height: 'calc(100% - 384px)',
            minHeight: '520px',
            maxHeight: '616px',
            marginTop: '150px'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid container justify='space-between' item xs={12} md={10} xl={9} className={classes.hero}>
            <HeroText/>
        </Grid>
    );
};