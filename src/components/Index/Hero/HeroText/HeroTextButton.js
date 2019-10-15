import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextButton: {
        position: 'relative',
        top: '-50px',
        opacity: 0,
        margin: '0px 10px 10px 0px',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px'
        }
    }
}));

export default props => {
    const classes = useStyles();
    const heroTextButton = useRef(null);
    useEffect(() => {
        heroTextButton.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        heroTextButton.current.style.opacity = 1;
        heroTextButton.current.style.top = '0px';
    });
    return (
        <Button color='secondary'
                variant='outlined'
                className={classes.heroTextButton}
                ref={heroTextButton}>
            {props.text}
        </Button>
    );
};