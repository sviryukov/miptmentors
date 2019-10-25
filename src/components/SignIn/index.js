import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {CssBaseline, Grid} from '@material-ui/core';
import Navbar from '../common/Navbar';
import PageHeader from '../common/PageHeader';
import Page from "../common/Page";
import SingInHeader from './SingInHeader';
import SingInEmailField from './SingInEmailField';
import SingInPasswordField from './SingInPasswordField';
import SingInButton from "./SingInButton";
import Footer from "../common/Footer";

let useStyles = makeStyles({
    singInContainer: {
        textAlign: "center"
    }
});

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <PageHeader text=''/>
            <Page>
                <Grid item xl={2} lg={3} md={4} sm={6} xs={8} className={classes.singInContainer}>
                    <SingInHeader/>
                    <SingInEmailField/>
                    <SingInPasswordField/>
                    <SingInButton/>
                </Grid>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};