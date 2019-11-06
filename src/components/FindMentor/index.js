import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Navbar from '../common/Navbar';
import Page from "../common/Page";
import BackgroundGradient from '../common/BackgroundGradient';
import FindMentorForm from './FindMentorForm';
import Footer from "../common/Footer";

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Page>
                <BackgroundGradient/>
                <FindMentorForm/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};