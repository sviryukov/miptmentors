import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextDescription: {
        marginBottom: '25px',
        lineHeight: '1.4',
        fontWeight: '100',
        color: theme.palette.primary.main,
        fontSize: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '26px'
        }
    }
}));

const HeroTextDescription = () => {
    const classes = useStyles();
    return (
        <Typography variant='h2'
                    className={classes.heroTextDescription}>
            29 опытных специалистов и предпренимателей уже помогли более
            100 физтехам в карьерной и профессиональной деятельности
        </Typography>
    );
};

export {HeroTextDescription};