import React from 'react';
import {Grid, CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Navbar from '../common/navbar';
import Header from '../common/header';
import SingInHeader from './header';
import EmailField from './email-field';
import PasswordField from './password-field';
import Button from "./button";

let useStyles = makeStyles({
    grid: {
        textAlign: "center"
    }
});

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Grid container justify='center'>
                <Header text=''/>
                <Grid item xl={2} lg={3} md={4} sm={6} xs={8} className={classes.grid}>
                    <SingInHeader animation_delay={0}/>
                    <EmailField animation_delay={0.1}/>
                    <PasswordField animation_delay={0.2}/>
                    <Button animation_delay={0.3}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};