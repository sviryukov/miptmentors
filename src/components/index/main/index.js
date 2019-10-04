import React, {useRef, useLayoutEffect, useEffect, useState} from 'react'
import {Container} from "@material-ui/core";
import Vanta from './vanta.net';
import Navbar from "../../common/navbar";
import Content from './content';
import theme from '../../../theme'

export default props => {
    const netAnimation = useRef();
    const [height, setHeight] = useState(0);
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
    const handleResize = () => {
        setHeight(window.innerHeight);
    };
    useEffect(() => {
        handleResize();
    }, []);
    return (
        <React.Fragment>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"/>
            <Container maxWidth={false} ref={netAnimation} style={{ minHeight: height, padding: '0px' }}>
                <Navbar/>
                <Content/>
            </Container>
        </React.Fragment>
    );
};
