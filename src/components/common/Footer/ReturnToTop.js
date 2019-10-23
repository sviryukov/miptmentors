import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    returnToTop: {
        width: '70px',
        backgroundColor: '#3b3e43',
        backgroundImage: 'url(/img/return-to-top.svg)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer'
    }
});

export default () => {
    const classes = useStyles();
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    return (
        <Grid item className={classes.returnToTop} onClick={handleClick}>
        </Grid>
    );
}