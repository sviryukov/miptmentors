import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {AboutHeader} from "./AboutHeader";
import {Footer} from "../common/Footer";

const About = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Page>
                <AboutHeader/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {About};