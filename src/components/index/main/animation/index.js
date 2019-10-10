import React, {useEffect} from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
let mojs, points,
    circle75, circle90, circle15_25, circle15_55, circle100,
    burst,
    circleStatic, circleRolling;
import theme from "../../../../theme";

const useStyles = makeStyles({
    container: {
        position: 'relative'
    }
});

export default () => {
    const classes = useStyles();
    useEffect(() => {

        mojs = require('@mojs/core');

        points = require('./points');
        circle90 = require('./circle90');
        circle15_25 = require('./circle15_25');
        circle15_55 = require('./circle15_55');
        circle75 = require('./circle75');
        circle100 = require('./circle100');
        burst = require('./burst');
        circleStatic = require('./circle-static');
        circleRolling = require('./circle-rolling');

        const points1 = points.build(theme.palette.secondary.main, [], [3, 4], [6]);
        const points2 = points.build('cyan', [4, 5, 6], [], [6]);
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
            repeat: 3600
        }).add(
            circleStatic1, circleRolling1,
            burst1, burst2, burst3,
            [circle100_1, circle75_1, circle15_25_1, circle15_55_1, circle90_1]
            //, points1, points2
        ).play();

    }, []);
    return (
        <Grid item xs={5} component={Box} display={{ xs: 'none', lg: 'flex' }} id='container' className={classes.container}>
        </Grid>
    );
}