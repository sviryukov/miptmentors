import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import ContactUsHeader from "./ContactUsHeader";
import ContactUsEmailField from "./ContactUsEmailField";
import ContactUsMessageField from "./ContactUsMessageField";
import ContactUsButton from "./ContactUsButton";

let useStyles = makeStyles(theme => ({
    contactUsContainer: {
        borderRadius: '4px',
        padding: '80px 30px 40px',
        [theme.breakpoints.up('sm')]: {
            padding: '100px 150px 40px'
        },
        [theme.breakpoints.up('md')]: {
            height: '489px',
            padding: '64px',
            margin: '80px 0px 50px',
            backgroundColor: theme.palette.background.paper
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={5} lg={4} xl={3}
              className={classes.contactUsContainer}>
            <ContactUsHeader/>
            <ContactUsEmailField/>
            <ContactUsMessageField/>
            <ContactUsButton/>
        </Grid>
    );
};