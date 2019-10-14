import React, {useEffect, useRef} from 'react';
import {Typography, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Lock} from '@material-ui/icons';

let useStyles = makeStyles(theme =>({
    header: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        marginBottom: '20px',
        textAlign: 'center'
    },
    icon: {
        width: '40px',
        margin: "auto",
        marginBottom: "10px",
        backgroundColor: theme.palette.secondary.main
    }
}));

export default props => {
    const classes = useStyles();
    const header = useRef(null);
    useEffect(() => {
        header.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        header.current.style.opacity = 1;
        header.current.style.top = '0px';
    });
    return (
        <Typography variant='h4' className={classes.header} ref={header}>
            <Avatar className={classes.icon}>
                <Lock/>
            </Avatar>
            Войти
        </Typography>
    );
};