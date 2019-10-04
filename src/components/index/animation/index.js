import React, {useRef, useLayoutEffect} from 'react'
import {Fade} from "@material-ui/core";
import Vanta from './vanta.net';
import theme from '../../../theme'
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    animation: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        minHeight: '735px'
    }
});

export default props => {
    const classes = useStyles();
    const netAnimation = useRef();
    if(props.client) {
        useLayoutEffect(() => {
            Vanta({
                el: netAnimation.current,
                points: 6.00,
                maxDistance: 26.00,
                spacing: 20.00,
                color: theme.palette.secondary.main,
                backgroundColor: 'white'
            })
        });
    }
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <div ref={netAnimation} className={classes.animation}/>
            </Fade>
        </React.Fragment>
    );
};
