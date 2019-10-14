import React from 'react'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    header: {
        marginBottom: '15px',
        lineHeight: '1.4',
        fontWeight: 'normal',
        fontSize: '25px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '44px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '55px'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Typography variant='h1' className={classes.header} color='secondary'>
            Программа наставничества<br/>для студентов МФТИ
        </Typography>
    );
};