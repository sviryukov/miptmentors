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

        const circle90_1 = circle90.build();
        const circle15_25_1 = circle15_25.build();
        const circle15_55_1 = circle15_55.build();
        const circle75_1 = circle75.build();
        const circle100_1 = circle100.build();
        const burst1 = burst.build(12000);
        const burst2 = burst.build(21000);
        const burst3 = burst.build(26000);
        const circleStatic1 = circleStatic.build();
        const circleRolling1 = circleRolling.build();

        new mojs.Timeline({
            repeat: 3600,
            onStart: () => {
                document.getElementsByClassName(classes.animation)[0].style.backgroundImage = 'none';
            }
        }).add(
            circleStatic1, circleRolling1,
            burst1, burst2, burst3,
            [circle100_1, circle75_1, circle15_25_1, circle15_55_1, circle90_1]
        ).play();

    }, []);
    return (
        <Grid item xs={5} component={Box} display={{ xs: 'none', lg: 'flex' }} className={classes.container}>
            <Box id='animation' className={classes.animation}/>
        </Grid>
    );
}