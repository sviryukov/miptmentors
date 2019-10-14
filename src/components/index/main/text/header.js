import React, {useEffect, useRef} from 'react'
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    header: {
        position: 'relative',
        top: '-50px',
        opacity: 0,
        marginBottom: '15px',
        lineHeight: '1.4',
        fontWeight: 'normal',
        fontSize: '25px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '44px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '55px'
        }
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
        <Typography variant='h1' color='secondary' className={classes.header} ref={header}>
            Программа наставничества<br/>для студентов МФТИ
        </Typography>
    );
};