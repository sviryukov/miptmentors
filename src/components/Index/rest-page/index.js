import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    restPage: {
        minHeight: '2000px',
        margin: 'auto',
        backgroundColor: '#fafafa',
        transition: 'width 0.3s'
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
        <Grid container
              className={classes.restPage}
              style={{width: width + '%'}}>
        </Grid>
    );
};