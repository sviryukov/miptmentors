import React from 'react'
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from "../../common/navbar";
import Content from './content';
import Animation from './animation';

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
    },
    container: {
        height: '100%',
        marginTop: '40px',
        padding: '50px 5% 150px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '100px',
            padding: '0px 5%'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0px 20px'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '150px'
        }
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