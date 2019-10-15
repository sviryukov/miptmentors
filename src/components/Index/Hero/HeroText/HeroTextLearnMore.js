import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextLearnMore: {
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
    const heroTextLearnMore = useRef(null);
    useEffect(() => {
        heroTextLearnMore.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        heroTextLearnMore.current.style.opacity = 1;
        heroTextLearnMore.current.style.top = '0px';
    });
    return (
        <Typography className={classes.heroTextLearnMore} ref={heroTextLearnMore}>
            Узнать больше ➙
        </Typography>
    );
};