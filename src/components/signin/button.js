import React, {useEffect, useRef} from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

let useStyles = makeStyles({
    button: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        marginTop: "20px",
        marginBottom: "20px",
    }
});

export default props => {
    const classes = useStyles();
    const button = useRef(null);
    useEffect(() => {
        button.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        button.current.style.opacity = 1;
        button.current.style.top = '0px';
    });
    return (
        <Button variant="contained"
                size="large"
                color="primary"
                className={classes.button}
                ref={button}>
            Войти
        </Button>
    );
};