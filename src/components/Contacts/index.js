import React, {useEffect} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/Navbar';
import PageHeader from "../common/PageHeader";
import {reveal} from "../common/animations";
import ContactCard from './ContactCard';
import data from './data';

export default () => {
    useEffect(() => {
        reveal();
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <PageHeader text='Контакты'/>
            <Grid container justify='center'>
                <Grid container spacing={6} justify='center' item xs={11} sm={8} md={11} lg={10} xl={8}>
                    {
                        data.map(contact => (
                            <ContactCard { ...contact } key={contact.name}/>
                        ))
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );
};