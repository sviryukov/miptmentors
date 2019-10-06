import React from 'react'
import {Container} from "@material-ui/core";
import Navbar from "../../common/navbar";
import Content from './content';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100%',
        padding: '0px',
        backgroundColor: theme.palette.primary.main
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.container}>
            <Navbar/>
            <Content/>
        </Container>
    );
};