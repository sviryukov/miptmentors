import React, {useEffect} from 'react';
import {Box, CssBaseline, Grid} from "@material-ui/core";
import Main from './main';
import Navbar from '../common/Navbar';
import RestPage from './rest-page';
import Hero from "./main";

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