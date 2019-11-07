import React from 'react';
import {CssBaseline, Grid, Box} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {BackgroundGradient} from '../common/BackgroundGradient';
import {SignInForm} from './SignInForm';
import {Footer} from "../common/Footer";

const SignIn = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Page>
                <BackgroundGradient/>
                <SignInForm/>
                <Grid component={Box} display={{xs: 'none', md: 'flex'}}
                      item xs={5} lg={4} xl={3}/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {SignIn};