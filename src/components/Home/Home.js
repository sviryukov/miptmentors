import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Hero} from "./Hero";
import {HomePage} from './HomePage';
import {HomeAboutProject} from "./HomeAboutProject";
import {HomeCountUps} from "./HomeCountUps";
import {HomeMentors} from "./HomeMentors";
import {HomePhystechUnion} from "./HomePhystechUnion";
import {HomePartners} from "./HomePartners";
import {Footer} from "../common/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Hero/>
            <HomePage>
                <HomeAboutProject/>
                <HomeCountUps/>
                <HomeMentors/>
                <HomePhystechUnion/>
                <HomePartners/>
            </HomePage>
            <Footer/>
        </React.Fragment>
    );
};

export {Home};