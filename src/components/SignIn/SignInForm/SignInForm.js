import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {FormHeader} from '../../common/FormHeader';
import {SignInEmailField} from './SingInEmailField';
import {SignInPasswordField} from './SingInPasswordField';
import {SignInButton} from "./SingInButton";

let useStyles = makeStyles(theme => ({
    singInForm: {
        borderRadius: '4px',
        padding: '80px 30px 40px',
        [theme.breakpoints.up('sm')]: {
            padding: '100px 150px 40px'
        },
        [theme.breakpoints.up('md')]: {
            height: '445px',
            padding: '64px',
            marginTop: '80px',
            backgroundColor: theme.palette.background.paper
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    }
}));

const SignInForm = () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={5} lg={4} xl={3}
              className={classes.singInForm}>
            <FormHeader text='Войти'/>
            <SignInEmailField/>
            <SignInPasswordField/>
            <SignInButton/>
        </Grid>
    );
};

export {SignInForm};