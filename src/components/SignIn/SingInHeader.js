import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography, Avatar} from '@material-ui/core';
import {Lock} from '@material-ui/icons';

let useStyles = makeStyles(theme => ({
    signInHeader: {
        position: 'relative',
        top: '50px',
        opacity: 0,
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
    const signInHeader = useRef(null);
    useEffect(() => {
        signInHeader.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        signInHeader.current.style.opacity = 1;
        signInHeader.current.style.top = '0px';
    });
    return (
        <Typography variant='h4' className={classes.signInHeader} ref={signInHeader}>
            <Avatar className={classes.signInHeaderIcon}>
                <Lock/>
            </Avatar>
            Войти
        </Typography>
    );
};