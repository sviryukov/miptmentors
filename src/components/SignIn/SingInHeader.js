import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography, Avatar} from '@material-ui/core';
import {Lock} from '@material-ui/icons';
import {FadeFromBottom} from "../common/animations";

let useStyles = makeStyles(theme => ({
    signInHeader: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    signInHeaderIcon: {
        width: '40px',
        margin: "auto",
        marginBottom: "10px",
        backgroundColor: theme.palette.secondary.main
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <FadeFromBottom component={Typography}
                        delay={props.animation_delay}
                        variant='h4'
                        className={classes.signInHeader}>
            <Avatar className={classes.signInHeaderIcon}>
                <Lock/>
            </Avatar>
            Войти
        </FadeFromBottom>
    );
};