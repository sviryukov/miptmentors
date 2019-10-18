import React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/Navbar';
import PageHeader from "../common/PageHeader";
import ContactCard from './ContactCard';
import data from './data';

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <PageHeader text='Контакты'/>
            <Grid container justify='center'>
                <Grid container spacing={6} justify='center' item xs={11} sm={8} md={11} lg={10} xl={8}>
                    {
                        data.map((contact, i) => (
                            <ContactCard { ...contact } key={i} animation_delay={i*0.1}/>
                        ))
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );
};