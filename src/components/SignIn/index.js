import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {CssBaseline, Grid} from '@material-ui/core';
import Navbar from '../common/Navbar';
import PageHeader from '../common/PageHeader';
import SingInHeader from './SingInHeader';
import SingInEmailField from './SingInEmailField';
import SingInPasswordField from './SingInPasswordField';
import SingInButton from "./SingInButton";

let useStyles = makeStyles({
    singInContainer: {
        textAlign: "center"
    }
});

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <PageHeader text=''/>
            <Grid container justify='center'>
                <Grid item xl={2} lg={3} md={4} sm={6} xs={8} className={classes.singInContainer}>
                    <SingInHeader animation_delay={0}/>
                    <SingInEmailField animation_delay={0.1}/>
                    <SingInPasswordField animation_delay={0.2}/>
                    <SingInButton animation_delay={0.3}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};