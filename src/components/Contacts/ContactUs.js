import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {FormHeader} from "../common/forms/FormHeader";
import {LongTextField} from "../common/forms/LongTextField";
import {Textarea} from "../common/forms/Textarea";
import {SendButton} from "../common/forms/SendButton";

let useStyles = makeStyles(theme => ({
    contactUsContainer: {
        order: '3',
        borderRadius: '4px',
        padding: '80px 30px 00px',
        [theme.breakpoints.up('sm')]: {
            padding: '80px 150px 00px'
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
              className={classes.contactUsContainer}>
            <FormHeader text='Свяжитесь с нами'/>
            <LongTextField label={'E-mail'}/>
            <Textarea label={'Ваш вопрос'} rows={5}/>
            <SendButton textAlign={'left'}/>
        </Grid>
    );
};

export {ContactUs};