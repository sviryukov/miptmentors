import React, {useEffect, useState} from 'react'
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        position: 'relative',
        top: '-100px',
        minHeight: '2000px',
        margin: 'auto',
        backgroundColor: '#fafafa',
        transition: 'width 0.1s ease-out'
    }
});

export default () => {
    const classes = useStyles();
    const [width, setWidth] = useState(90);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let add_width = window.scrollY < 500 ? 10 * window.scrollY / 500 : 10;
            setWidth(90 + add_width)
        });
    }, []);
    return (
        <Grid container className={classes.container} style={{ width: width + '%' }}>

        </Grid>
    );
};