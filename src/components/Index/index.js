import React, {useEffect} from 'react';
import {CssBaseline} from "@material-ui/core";
import Navbar from '../common/Navbar';
import Hero from "./Hero";
import RestPage from './rest-page';

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
            <RestPage/>
        </React.Fragment>
    )
};