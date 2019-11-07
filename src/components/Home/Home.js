import React, {useEffect} from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Hero} from "./Hero";
import {HomePage} from './HomePage';
import {SlideFromBottom} from "../common/animations";
import {Footer} from "../common/Footer";

const Home = () => {
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
            <SlideFromBottom duration={0.5}
                             interval={300}>
                <HomePage/>
            </SlideFromBottom>
            <Footer/>
        </React.Fragment>
    )
};

export {Home};