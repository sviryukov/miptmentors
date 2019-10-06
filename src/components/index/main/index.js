import React from 'react'
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from "../../common/navbar";
import Content from './content';
import Animation from './animation';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '40px 0px',
        padding: '0px 20px',
        [theme.breakpoints.up('sm')]: {
            margin: '130px 0px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0px'
        },
        [theme.breakpoints.up('xl')]: {
            margin: '200px 0px'
        }
    },
    main: {
        minHeight: '100%',
        padding: '0px',
        backgroundColor: theme.palette.primary.main
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.main}>
            <Navbar/>
            <Grid container justify='center'>
                <Grid item container xs={12} md={10} lg={9} className={classes.container}>
                    <Content/>
                    <Animation/>
                </Grid>
            </Grid>
        </Container>
    );
};