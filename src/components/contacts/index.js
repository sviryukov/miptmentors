import React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/navbar';
import Header from "../common/header";
import Contact from './contact';
import data from './data';

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Grid container justify='center'>
                <Header text='Контакты'/>
                <Grid item xs={11} sm={8} md={11} lg={10} xl={8}>
                    <Grid container spacing={6} justify='center'>
                        {
                            data.map((contact, i) => (
                                <Contact { ...contact } key={i} />
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};