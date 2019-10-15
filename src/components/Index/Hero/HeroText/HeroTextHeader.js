import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextHeader: {
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
    const heroTextHeader = useRef(null);
    useEffect(() => {
        heroTextHeader.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        heroTextHeader.current.style.opacity = 1;
        heroTextHeader.current.style.top = '0px';
    });
    return (
        <Typography variant='h1' color='secondary' className={classes.heroTextHeader} ref={heroTextHeader}>
            Программа наставничества<br/>для студентов МФТИ
        </Typography>
    );
};