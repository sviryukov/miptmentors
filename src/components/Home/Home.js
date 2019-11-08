import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Hero} from "./Hero";
import {HomePage} from './HomePage';
import {HomeAboutProject} from "./HomeAboutProject";
import {HomeCountUpsContainer} from "./HomeCountUpsContainer";
import {HomePhystechUnion} from "./HomePhystechUnion";
import {HomePartnersContainer} from "./HomePartnersContainer";
import {Footer} from "../common/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Hero/>
            <HomePage>
                <HomeAboutProject/>
                <HomeCountUpsContainer/>
                <HomePhystechUnion/>
                <HomePartnersContainer/>
            </HomePage>
            <Footer/>
        </React.Fragment>
    );
};

export {Home};