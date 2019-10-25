import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextLearnMore: {
        width: 'fit-content',
        margin: '10px auto',
        cursor: 'pointer',
        color: 'cyan',
        fontSize: '17px',
        transition: 'color 0.4s',
        [theme.breakpoints.up('sm')]: {
            margin: '10px 0px',
            fontSize: '20px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
        '&:hover': {
            color: 'magenta'
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