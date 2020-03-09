import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {HeroHeader} from "./HeroHeader";
import {HeroSubheader} from "./HeroSubheader";
import {HeroButton} from "./HeroButton";
import {HeroLearnMore} from "./HeroLearnMore";

const useStyles = makeStyles(theme => ({
    heroContainer: {
        margin: '0px',
        padding: '50px 0px',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, ' + theme.palette.primary.light + ', ' + theme.palette.primary.dark + ')',
        shapeOutside: 'polygon(0 0, 100% 0, 100% 95%, 33% 100%, 0 95%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 95%, 33% 100%, 0 95%)',
        [theme.breakpoints.up("md")]: {
            padding: '100px 0px',
            shapeOutside: 'polygon(0 0, 100% 0, 100% 80%, 33% 100%, 0 80%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 33% 100%, 0 80%)'
        }
    },
    hero: {
        [theme.breakpoints.up("md")]: {
            textAlign: 'center'
        }
    }
}));

const Hero = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} item xs={12} className={classes.heroContainer}>
            <Grid item xs={11} lg={8} className={classes.hero}>
                <HeroHeader/>
                <HeroSubheader/>
                <HeroButton text='Найти ментора' href={'/findmentor'}/>
                <HeroButton text='Стать ментором' href={'/becomementor'}/>
                <HeroLearnMore/>
            </Grid>
        </Grid>
    );
};

export {Hero};