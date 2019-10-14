import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

let useStyles = makeStyles({
    button: {
        marginTop: "20px",
        marginBottom: "20px",
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Button variant="contained" size="large" color="primary" className={classes.button}>
            Войти
        </Button>
    );
};