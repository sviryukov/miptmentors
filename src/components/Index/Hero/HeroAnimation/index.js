import React, {useEffect} from 'react';
import {Fade, Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    heroAnimation: {
        width: '396px',
        height: '420px',
        position: 'relative',
        backgroundImage: 'url(img/hero-animation-bg.svg)'
    }
});

export default () => {
    const classes = useStyles();
    useEffect(() => {

        const mojs = require('@mojs/core');
        const circle90 = require('./shapes/circle90');
        const circle15_25 = require('./shapes/circle15_25');
        const circle15_55 = require('./shapes/circle15_55');
        const circle75 = require('./shapes/circle75');
        const circle100 = require('./shapes/circle100');
        const burst = require('./shapes/burst');
        const circleStatic = require('./shapes/circle-static');
        const circleRolling = require('./shapes/circle-rolling');

        const shapes = [circle90.build(), circle15_25.build(), circle15_55.build(), circle75.build(), circle100.build(),
            burst.build(12000), burst.build(21000), burst.build(26000), circleStatic.build()];

        const mainTimeline = new mojs.Timeline({
            repeat: 3600,
            onStart: () => document.getElementsByClassName(classes.heroAnimation)[0].style.backgroundImage = 'none'
        }).add(shapes);
        const circleRollingTimeline = new mojs.Timeline({
            onStart: () => mainTimeline.play()
        }).add(circleRolling.build()).play();

    }, []);
    return (
        <Fade in={true} timeout={1500}>
            <Grid item
                  component={Box}
                  display={{ xs: 'none', lg: 'flex' }}
                  className={classes.heroAnimation}
                  id='hero-animation'/>
        </Fade>
    );
}