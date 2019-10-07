import React, {useEffect} from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
let mojs;

const useStyles = makeStyles({
    container: {
        position: 'relative'
    }
});

export default () => {
    const classes = useStyles();
    useEffect(() => {
        mojs = require('@mojs/core');
        const y = -50;
        const staticTriangle = new mojs.Shape({
            parent: document.getElementById('spinner'),
            shape: 'polygon',
            duration: 1160,
            radius: { 60: 65 },
            angle: -60,
            fill: 'none',
            stroke: '#fff',
            strokeWidth: { 30 : 5 },
            easing: 'cubic.out',
            isShowEnd: true,
            width: 170,
            height: 170,
            y
        });
        let shift1 = 87,
            shift2 = 50,
            SMALL_OPTS = {
                parent: document.getElementById('spinner'),
                shape: 'polygon',
                duration: 1160,
                radius: 14,
                angle: -60,
                fill: 'none',
                stroke: '#fff',
                strokeWidth: { 14 : 4 },
                easing: 'expo.out',
                isShowEnd: true
            };
        let small1 = new mojs.Shape({
            ...SMALL_OPTS,
            x: { 0: -shift1 },
            y: { [y]: -shift2 + y }
        });
        let small2 = new mojs.Shape({
            ...SMALL_OPTS,
            x: { 0: shift1 },
            y: { [y]: -shift2 + y }
        });
        let small3 = new mojs.Shape({
            ...SMALL_OPTS,
            y: { [y]: 1.15*shift1 + y }
        });
        let SUPP_OPTS = {
            parent: document.getElementById('spinner'),
            shape: 'polygon',
            duration: 1000,
            radius: { 40: 20 },
            angle: -60,
            fill: '#fff',
            fillOpacity: { 0: 1 },
            stroke: '#fff',
            strokeWidth: { 7 : 0 },
            easing: 'cubic.out',
            delay: 60,
            y,
            isShowEnd: true
        };
        let support1 = new mojs.Shape(SUPP_OPTS);
        let support2 = new mojs.Transit({
            ...SUPP_OPTS,
            strokeWidth: { 4 : 0 },
            fill: 'none',
            radius: { 85 : 95 }
        });
        const timeline = new mojs.Timeline();
        timeline
            .add(
                staticTriangle,
                [ small1, small2, small3 ],
                [ support1, support2 ]
            ).play();
    }, []);
    return (
        <Grid item xs={5} component={Box} display={{ xs: 'none', lg: 'flex' }} id='spinner' className={classes.container}>
        </Grid>
    );
}