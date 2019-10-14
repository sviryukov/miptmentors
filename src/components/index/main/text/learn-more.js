import React, {useEffect, useRef} from 'react'
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    learnMore: {
        position: 'relative',
        top: '-50px',
        opacity: 0,
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

export default props => {
    const classes = useStyles();
    const learnMore = useRef(null);
    useEffect(() => {
        learnMore.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        learnMore.current.style.opacity = 1;
        learnMore.current.style.top = '0px';
    });
    return (
        <Typography className={classes.learnMore} ref={learnMore}>
            Узнать больше ➙
        </Typography>
    );
};