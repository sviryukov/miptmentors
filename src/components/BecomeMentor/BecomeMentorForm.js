import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {Form} from "../common/forms/Form";
import {becomeMentorFormData} from "./becomeMentorFormData";

let useStyles = makeStyles(theme => ({
    becomeMentorForm: {
        borderRadius: '4px',
        padding: '80px 20px 40px',
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
            <Form formData={becomeMentorFormData}
                  headerProps={{
                      text: 'Стать ментором'
                  }}
                  url={'/becomementor'}
                  alert={{
                      success: 'Заявка успешно отправлена!',
                      error: 'Что-то пошло не так, пожалуйста, повторите отправку позже'
                  }}/>
        </Grid>
    );
};

export {BecomeMentorForm};