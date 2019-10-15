import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button} from '@material-ui/core';

let useStyles = makeStyles({
    singInButton: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        marginTop: "20px",
        marginBottom: "20px",
    }
});

export default props => {
    const classes = useStyles();
    const singInButton = useRef(null);
    useEffect(() => {
        singInButton.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        singInButton.current.style.opacity = 1;
        singInButton.current.style.top = '0px';
    });
    return (
        <Button variant="contained"
                size="large"
                color="primary"
                className={classes.singInButton}
                ref={singInButton}>
            Войти
        </Button>
    );
};