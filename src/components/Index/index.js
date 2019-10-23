import React, {useEffect} from 'react';
import {CssBaseline} from "@material-ui/core";
import Navbar from '../common/Navbar';
import Hero from "./Hero";
import RestPage from './rest-page';
import {SlideFromBottom} from "../common/animations";
import Footer from "../common/Footer";

export default () => {
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Hero/>
            <SlideFromBottom delay={0.5}
                             interval={300}
                             final_position={-100}>
                <RestPage/>
            </SlideFromBottom>
            <Footer/>
        </React.Fragment>
    )
};