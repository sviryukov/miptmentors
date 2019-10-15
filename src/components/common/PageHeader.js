import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    pageHeaderContainer: {
        paddingTop: "30px",
        paddingBottom: "60px",
        backgroundImage: 'url(/img/header-bg.svg)',
        backgroundPositionX: 'center',
        [theme.breakpoints.up('sm')]: {
            marginBottom: "40px",
            paddingTop: "20px",
            paddingBottom: "80px"
        }
    },
    pageHeader: {
        height: '35px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: theme.palette.secondary.main
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.pageHeaderContainer}>
            <Typography variant='h1' className={classes.pageHeader}>
                {props.text}
            </Typography>
        </Grid>
    );
};