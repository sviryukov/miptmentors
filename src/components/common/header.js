import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: "40px",
        paddingTop: "60px",
        paddingBottom: "120px",
        backgroundImage: 'url(/img/header-bg.svg)',
        backgroundPositionX: 'center'
    },
    header: {
        height: '35px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: theme.palette.primary.main
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