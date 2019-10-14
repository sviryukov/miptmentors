import React from 'react'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    learnMore: {
        width: 'fit-content',
        margin: '10px auto',
        cursor: 'pointer',
        color: 'cyan',
        transition: 'color 0.4s',
        fontSize: '17px',
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
        <Typography className={classes.learnMore}>
            Узнать больше ➙
        </Typography>
    );
};