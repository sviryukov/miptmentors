import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Grid} from "@material-ui/core";
import {Hero} from "./Hero";
import {HomeNews} from './HomeNews';
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
            <Grid container justify={'center'}>
                <Hero/>
                <HomeNews/>
                <HomeAboutProject/>
                <HomeCountUps/>
                <HomeMentors/>
                <HomePhystechUnion/>
                <HomePartners/>
            </Grid>
            <Footer/>
        </React.Fragment>
    );
};

export {Home};