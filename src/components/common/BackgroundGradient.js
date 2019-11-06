import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: '0px',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
        background: 'linear-gradient(45deg, ' + theme.palette.secondary.light + ', ' + theme.palette.secondary.dark + ')',
        shapeOutside: 'polygon(0 185px, 66% 215px, 100% 155px, 100% 100%, 0 100%)',
        clipPath: 'polygon(0 185px, 66% 215px, 100% 155px, 100% 100%, 0 100%)',
        [theme.breakpoints.up('xl')]: {
            shapeOutside: 'polygon(0 220px, 66% 260px, 100% 180px, 100% 100%, 0 100%)',
            clipPath: 'polygon(0 220px, 66% 260px, 100% 180px, 100% 100%, 0 100%)'
        },
        zIndex: '-1'
    }
}));

const BackgroundGradient = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              className={classes.backgroundGradient}/>
    );
};

export {BackgroundGradient};