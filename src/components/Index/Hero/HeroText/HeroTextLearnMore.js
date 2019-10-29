import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextLearnMore: {
        width: 'fit-content',
        margin: '10px 0px',
        cursor: 'pointer',
        color: theme.palette.primary.main,
        fontSize: '17px',
        fontWeight: '100',
        transition: 'color 0.2s',
        [theme.breakpoints.up('sm')]: {
            margin: '10px 0px',
            fontSize: '20px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Typography className={classes.heroTextLearnMore}>
            Узнать больше ➙
        </Typography>
    );
};