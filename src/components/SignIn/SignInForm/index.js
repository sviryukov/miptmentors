import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import SingInHeader from './SingInHeader';
import SingInEmailField from './SingInEmailField';
import SingInPasswordField from './SingInPasswordField';
import SingInButton from "./SingInButton";

let useStyles = makeStyles(theme => ({
    singInContainer: {
        borderRadius: '4px',
        padding: '100px 40px 40px',
        [theme.breakpoints.up('sm')]: {
            padding: '100px 150px 40px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '100px 66px',
            marginTop: '100px',
            backgroundColor: theme.palette.background.paper
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={5} lg={4} xl={3}
              className={classes.singInContainer}>
            <SingInHeader/>
            <SingInEmailField/>
            <SingInPasswordField/>
            <SingInButton/>
        </Grid>
    );
};