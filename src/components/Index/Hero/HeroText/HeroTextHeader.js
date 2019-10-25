import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextHeader: {
        marginBottom: '15px',
        lineHeight: '1.4',
        fontWeight: '100',
        fontSize: '25px',
        color: theme.palette.secondary.dark,
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
        <Typography variant='h1'
                    color='secondary'
                    className={classes.heroTextHeader}>
            Программа наставничества<br/>для студентов МФТИ
        </Typography>
    );
};