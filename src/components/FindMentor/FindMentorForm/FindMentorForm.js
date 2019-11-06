import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {FormHeader} from "../../common/FormHeader";

let useStyles = makeStyles(theme => ({
    findMentorForm: {
        borderRadius: '4px',
        padding: '80px 30px 40px',
        [theme.breakpoints.up('sm')]: {
            padding: '100px 150px 40px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '64px',
            marginTop: '80px',
            backgroundColor: theme.palette.background.paper
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    }
}));

const FindMentorForm = () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={6} lg={5} xl={4}
              className={classes.findMentorForm}>
            <FormHeader text='Найти ментора'/>
        </Grid>
    );
};

export {FindMentorForm};