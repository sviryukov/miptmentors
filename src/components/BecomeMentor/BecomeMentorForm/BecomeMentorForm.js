import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {FormHeader} from "../../common/forms/FormHeader";
import {ShortTextField} from "../../common/forms/ShortTextField";
import {LongTextField} from "../../common/forms/LongTextField";
import {BecomeMentorFormMeetFreq} from "./BecomeMentorFormMeetFreq";
import {PublicationConsent} from "../../common/forms/PublicationConsent";
import {ProcessingConsent} from "../../common/forms/ProcessingConsent";
import {SendButton} from "../../common/forms/SendButton";

let useStyles = makeStyles(theme => ({
    becomeMentorForm: {
        borderRadius: '4px',
        padding: '80px 50px 40px',
        [theme.breakpoints.up('sm')]: {
            padding: '100px 50px 40px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '64px',
            margin: '80px 0px 50px',
            backgroundColor: theme.palette.background.paper
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    }
}));

const BecomeMentorForm =  () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={7} lg={6} xl={5}
              className={classes.becomeMentorForm}>
            <FormHeader text='Стать ментором'/>
            <ShortTextField label='Имя *' name='name'/>
            <ShortTextField label='Фамилия *' name='surname'/>
            <LongTextField label='Образование' name='education'/>
            <LongTextField label='Место работы и должность' name='work'/>
            <BecomeMentorFormMeetFreq/>
            <ShortTextField label='Телефон *' name='phone'/>
            <ShortTextField label='E-mail *' name='email'/>
            <PublicationConsent/>
            <ProcessingConsent/>
            <SendButton/>
        </Grid>
    );
};

export {BecomeMentorForm};