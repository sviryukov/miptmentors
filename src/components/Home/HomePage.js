import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homePage: {
        margin: 'auto',
        padding: '100px 0px',
        [theme.breakpoints.up('lg')]: {
            padding: '150px 0px'
        },
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        transition: 'width 0.3s, padding 0.3s'
    }
}));

const HomePage = props => {
    const classes = useStyles();
    const [width, setWidth] = useState(90);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let add_width = window.scrollY < 500 ? 10 * window.scrollY / 500 : 10;
            setWidth(90 + add_width)
        });
    }, []);
    return (
        <Grid component={Box}
              boxShadow={3}
              container
              className={classes.homePage}
              style={{width: width + '%'}}>
            {props.children}
        </Grid>
    );
};

export {HomePage};