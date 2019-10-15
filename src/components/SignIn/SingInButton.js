import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button} from '@material-ui/core';
import {FadeFromBottom} from "../common/animations";

let useStyles = makeStyles({
    singInButton: {
        marginTop: "20px",
        marginBottom: "20px",
    }
});

export default props => {
    const classes = useStyles();
    return (
        <FadeFromBottom component={Button}
                        delay={props.animation_delay}
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.singInButton}>
            Войти
        </FadeFromBottom>
    );
};