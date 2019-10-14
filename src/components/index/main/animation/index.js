import React, {useEffect} from 'react';
import {Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

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

        const mojs = require('@mojs/core');
        const circle90 = require('./circle90');
        const circle15_25 = require('./circle15_25');
        const circle15_55 = require('./circle15_55');
        const circle75 = require('./circle75');
        const circle100 = require('./circle100');
        const burst = require('./burst');
        const circleStatic = require('./circle-static');
        const circleRolling = require('./circle-rolling');

        const shapes = [circle90.build(), circle15_25.build(), circle15_55.build(), circle75.build(), circle100.build(),
            burst.build(12000), burst.build(21000), burst.build(26000), circleStatic.build()];

        const mainTimeline = new mojs.Timeline({
            repeat: 3600,
            onStart: () => document.getElementsByClassName(classes.animation)[0].style.backgroundImage = 'none'
        }).add(shapes);
        const circleRollingTimeline = new mojs.Timeline({
            onStart: () => mainTimeline.play()
        }).add(circleRolling.build()).play();

    }, []);
    return (
        <Grid item xs={5} component={Box} display={{ xs: 'none', lg: 'flex' }} className={classes.container}>
            <Box id='animation' className={classes.animation}/>
        </Grid>
    );
}