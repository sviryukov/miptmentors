import React, {useEffect} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/Navbar';
import PageHeader from "../common/PageHeader";
import {reveal} from "../common/animations";
import ContactCard from './ContactCard';
import data from './data';
import Footer from '../common/Footer';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    contactsPage: {
        minHeight: 'calc(100% - 356px)'
    }
});

export default () => {
    const classes = useStyles();
    useEffect(() => {
        reveal();
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <PageHeader text='Контакты'/>
            <Grid container justify='center' className={classes.contactsPage}>
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