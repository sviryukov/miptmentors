import React from 'react';
import {CssBaseline} from '@material-ui/core';
import Navbar from '../common/Navbar';
import Page from "../common/Page";
import SingInGradient from '../common/BackgroundGradient';
import SignInContainer from './SignInContainer';
import Footer from "../common/Footer";

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Page>
                <SingInGradient/>
                <SignInContainer/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};