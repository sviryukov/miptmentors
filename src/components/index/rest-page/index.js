import React, {useEffect, useRef, useState} from 'react'
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    restPage: {
        position: 'relative',
        top: '200px',
        minHeight: '2000px',
        margin: 'auto',
        backgroundColor: '#fafafa',
        transition: 'width 0.1s, top 0.5s'
    }
});

export default () => {
    const classes = useStyles();
    const [width, setWidth] = useState(90);
    const restPage = useRef(null);
    useEffect(() => {
        restPage.current.style.top = '-100px';
        window.addEventListener('scroll', () => {
            let add_width = window.scrollY < 500 ? 10 * window.scrollY / 500 : 10;
            setWidth(90 + add_width)
        });
    }, []);
    return (
        <Grid container className={classes.restPage} style={{ width: width + '%' }} ref={restPage}>

        </Grid>
    );
};