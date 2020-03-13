import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box, Typography} from '@material-ui/core';
import {FormHeader} from "../common/forms/FormHeader";
import {Form} from "../common/forms/Form";
import {reminderFormData} from "./reminderFormData";

const useStyles = makeStyles(theme => ({
    findMentorForm: {
        borderRadius: '4px',
        padding: '80px 20px 40px',
        fontSize: '19px',
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
    },
    findMentorFormText: {
        marginBottom: '20px'
    }
}));

const FindMentorForm = () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={7} lg={6} xl={5}
              className={classes.findMentorForm}>
            <FormHeader text='Найти ментора'/>
            <Typography className={classes.findMentorFormText}>
                Регистрация на 5-й сезон Клуба Менторов Физтех-Союза закрыта.
            </Typography>
            <Typography className={classes.findMentorFormText}>
                Присоединяйтесь к нам в следующем сезоне в октябре 2020 года!
            </Typography>
            <Form formData={reminderFormData}
                  url={'/reminder'}
                  alert={{
                      success: 'Мы обязательно напишем вам письмо с напоминанием и старте следуюшего набора!',
                      error: 'Что-то пошло не так, пожалуйста, повторите отправку позже'
                  }}
                  buttonText={'Напомнить мне о начале набора'}/>
        </Grid>
    );
};

export {FindMentorForm};