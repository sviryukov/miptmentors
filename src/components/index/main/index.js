import React, {useRef, useLayoutEffect, useEffect, useState} from 'react'
import {Container} from "@material-ui/core";
import Vanta from './vanta.net';
import Navbar from "../../common/navbar";
import Content from './content';
import theme from '../../../theme'
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    animationContainer: {
        minHeight: '100%',
        padding: '0px',
        backgroundImage: 'url(/img/net-bg.png)',
        backgroundPositionX: 'center'
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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"/>
            <Container maxWidth={false} ref={netAnimation} className={classes.animationContainer}>
                <Navbar/>
                <Content/>
            </Container>
        </React.Fragment>
    );
};
