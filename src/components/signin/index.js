import React from 'react';
import {Avatar, Grid, CssBaseline, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Lock} from '@material-ui/icons';
import Navbar from '../common/navbar';
import Header from '../common/header';

let useStyles = makeStyles(theme =>({
    grid: {
        textAlign: "center"
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    icon: {
        width: '40px',
        margin: "auto",
        marginBottom: "10px",
        backgroundColor: theme.palette.secondary.main
    },
    textField: {
        width: '100%'
    },
    button: {
        marginTop: "20px",
        marginBottom: "20px",
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Grid container justify='center'>
                <Header text=''/>
                <Grid item xl={2} lg={3} md={4} sm={6} xs={8} className={classes.grid}>
                    <Typography variant='h4' className={classes.header}>
                        <Avatar className={classes.icon}>
                            <Lock/>
                        </Avatar>
                        Войти
                    </Typography>
                    <TextField
                        label='Email'
                        type='text'
                        id='email'
                        name='username'
                        autoComplete='email'
                        margin='normal'
                        variant='outlined'
                        className={classes.textField}/>
                    <TextField
                        label='Password'
                        type='password'
                        id='password'
                        name='password'
                        autoComplete='current-password'
                        margin='normal'
                        variant='outlined'
                        className={classes.textField}/>
                    <Button variant="contained" size="large" color="primary" className={classes.button}>
                        Войти
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};