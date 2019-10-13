import React, {useEffect} from 'react';
import {Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
let mojs,
    circle75, circle90, circle15_25, circle15_55, circle100,
    burst,
    circleStatic, circleRolling;

const useStyles = makeStyles({
    container: {
        height: '420px'
    },
    animation: {
        width: '396px',
        height: '100%',
        position: 'relative',
        marginLeft: 'calc(100% - 396px)',
        backgroundImage: 'url(img/main-animation-bg.svg)'
    }
});

export default () => {
    const classes = useStyles();
    useEffect(() => {

        mojs = require('@mojs/core');

        circle90 = require('./circle90');
        circle15_25 = require('./circle15_25');
        circle15_55 = require('./circle15_55');
        circle75 = require('./circle75');
        circle100 = require('./circle100');
        burst = require('./burst');
        circleStatic = require('./circle-static');
        circleRolling = require('./circle-rolling');

        const shapes = [circle90.build(), circle15_25.build(), circle15_55.build(), circle75.build(), circle100.build(),
            burst.build(12000), burst.build(21000), burst.build(26000), circleStatic.build()];

        const timeline = new mojs.Timeline({ repeat: 3600 }).add(shapes, circleRolling.build(false));
        const initialTimeline = new mojs.Timeline({
            onStart: () => document.getElementsByClassName(classes.animation)[0].style.backgroundImage = 'none',
            onComplete: () => timeline.play()
        }).add(shapes, circleRolling.build(true)).play();

    }, []);
    return (
        <Grid item xs={5} component={Box} display={{ xs: 'none', lg: 'flex' }} className={classes.container}>
            <Box id='animation' className={classes.animation}/>
        </Grid>
    );
}