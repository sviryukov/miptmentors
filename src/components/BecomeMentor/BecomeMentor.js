import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {BackgroundGradient} from '../common/BackgroundGradient';
import {BecomeMentorForm} from './BecomeMentorForm';
import {Footer} from "../common/Footer";

const BecomeMentor = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar current='becomementor'/>
            <Page>
                <BackgroundGradient/>
                <BecomeMentorForm/>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {BecomeMentor};