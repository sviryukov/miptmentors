import React from 'react'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    description: {
        marginBottom: '25px',
        lineHeight: '1.4',
        fontWeight: 'normal',
        color: theme.palette.text.light,
        fontSize: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '26px'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Typography variant='h2' className={classes.description}>
            56 опытных специалистов и предпренимателей уже помогли более
            100 физтехам в карьерной и профессиональной деятельности
        </Typography>
    );
};