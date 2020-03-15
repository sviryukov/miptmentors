import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextSubheader: {
        margin: '25px 0px',
        fontSize: '20px',
        color: theme.palette.text.light,
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '26px'
        }
    }
}));

const HeroSubheader = () => {
    const classes = useStyles();
    return (
        <Typography variant='h2'
                    className={classes.heroTextSubheader}>
            Найдите наставника для карьерного роста или станьте ментором для будущего профессионала
        </Typography>
    );
};

export {HeroSubheader};