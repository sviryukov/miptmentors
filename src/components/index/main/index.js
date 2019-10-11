import React from 'react'
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from "../../common/navbar";
import Content from './content';
import Animation from './animation';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '500px',
        marginTop: '40px',
        padding: '0px 20px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '100px'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '150px'
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
                <Grid item container xs={12} md={10} xl={9} className={classes.container}>
                    <Content/>
                    <Animation/>
                </Grid>
            </Grid>
        </Container>
    );
};