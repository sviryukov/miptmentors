import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {AboutHeader} from "./AboutHeader";
import {AboutObjectives} from "./AboutObjectives";
import {Footer} from "../common/Footer";

const About = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Page>
                <AboutHeader/>
                <AboutObjectives/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {About};