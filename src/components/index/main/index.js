import React from 'react'
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from "../../common/navbar";
import Container from './container';

const useStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up('sm')]: {
            height: '730px'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%',
            minHeight: '700px',
            maxHeight: '800px'
        },
        [theme.breakpoints.up('lg')]: {
            height: '100%',
            minHeight: '830px',
            maxHeight: '1000px'
        },
        padding: '0px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Box className={classes.main} id='main'>
            <Navbar/>
            <Grid container justify='center'>
                <Container/>
            </Grid>
        </Box>
    );
};