import React from 'react'
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from "../../common/navbar";
import Content from './content';
import Animation from './animation';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        marginTop: '40px',
        padding: '0px 5%',
        [theme.breakpoints.up('sm')]: {
            marginTop: '100px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0px 20px'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '150px'
        }
    },
    main: {
        height: '650px',
        [theme.breakpoints.up('sm')]: {
            height: '780px'
        },
        [theme.breakpoints.up('md')]: {
            height: '100%',
            minHeight: '750px',
            maxHeight: '850px'
        },
        [theme.breakpoints.up('lg')]: {
            height: '100%',
            minHeight: '800px',
            maxHeight: '950px'
        },
        [theme.breakpoints.up('xl')]: {
            height: '100%',
            minHeight: '852px',
            maxHeight: '1100px'
        },
        padding: '0px',
        backgroundColor: theme.palette.primary.main
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.main} id='main'>
            <Navbar/>
            <Grid container justify='center'>
                <Grid item container xs={12} md={10} xl={9} className={classes.container}>
                    <Content/>
                    <Animation/>
                </Grid>
            </Grid>
        </Container>
    );
};