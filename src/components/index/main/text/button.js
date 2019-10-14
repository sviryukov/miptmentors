import React, {useEffect, useRef} from 'react'
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    button: {
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
    const button = useRef(null);
    useEffect(() => {
        button.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        button.current.style.opacity = 1;
        button.current.style.top = '0px';
    });
    return (
        <Button color='secondary'
                variant='outlined'
                className={classes.button}
                ref={button}>
            {props.text}
        </Button>
    );
};