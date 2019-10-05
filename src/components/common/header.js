import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: "40px",
        paddingTop: "30px",
        paddingBottom: "90px",
        backgroundImage: 'url(/img/header-bg.svg)',
        backgroundPositionX: 'center',
        [theme.breakpoints.up('sm')]: {
            paddingTop: "20px",
            paddingBottom: "80px"
        }
    },
    header: {
        height: '35px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: theme.palette.secondary.main
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.container}>
            <Typography variant='h1' className={classes.header}>
                {props.text}
            </Typography>
        </Grid>
    );
};