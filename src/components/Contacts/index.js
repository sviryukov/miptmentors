import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Navbar from '../common/Navbar';
import Page from '../common/Page';
import BackgroundGradient from '../common/BackgroundGradient';
import ContactUs from './ContactUs';
import ContactsText from './ContactsText';
import Footer from '../common/Footer';

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Page>
                <BackgroundGradient/>
                <ContactUs/>
                <ContactsText/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};