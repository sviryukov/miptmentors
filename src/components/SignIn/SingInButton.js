import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button} from '@material-ui/core';

let useStyles = makeStyles({
    singInButton: {
        marginTop: "20px",
        marginBottom: "20px",
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Button variant="contained"
                size="large"
                color="primary"
                className={classes.singInButton}>
            Войти
        </Button>
    );
};