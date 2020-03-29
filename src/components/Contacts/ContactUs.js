import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {Form} from "../common/forms/Form";
import {contactUsFormData} from "./contactUsFormData";

let useStyles = makeStyles(theme => ({
    contactUs: {
        order: '3',
        borderRadius: '4px',
        padding: '80px 30px 0px',
        [theme.breakpoints.up('sm')]: {
            padding: '80px 150px 0px'
        },
        [theme.breakpoints.up('md')]: {
            order: '2',
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

const ContactUs = () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={5} lg={4} xl={3}
              className={classes.contactUs}>
            <Form formData={contactUsFormData}
                  headerProps={{
                      text: 'Свяжитесь с нами'
                  }}
                  url={'/contactus'}
                  alert={{
                      success: 'Вопрос успешно отправлен!',
                      error: 'Что-то пошло не так, пожалуйста, повторите отправку позже'
                  }}/>
        </Grid>
    );
};

export {ContactUs};