import React from 'react'
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Text from './text';
import Animation from "./animation";

const useStyles = makeStyles(theme => ({
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
        <Grid item container xs={12} md={10} xl={9} className={classes.container}>
            <Text/>
            <Animation/>
        </Grid>
    );
};