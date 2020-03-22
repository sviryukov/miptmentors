import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextHeader: {
        fontSize: '25px',
        color: theme.palette.text.light,
        [theme.breakpoints.up('sm')]: {
            fontSize: '35px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '53px'
        }
    }
}));

const HeroHeader = () => {
    const classes = useStyles();
    return (
        <Typography variant='h1'
                    className={classes.heroTextHeader}>
            Программа наставничества для студентов и выпускников&nbsp;МФТИ
        </Typography>
    );
};

export {HeroHeader};