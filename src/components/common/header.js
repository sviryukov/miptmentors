import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        marginTop: "20px",
        marginBottom: "80px",
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundImage: 'url(/img/net-bg.svg)',
        backgroundPosition: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: '28px',
        textTransform: 'uppercase'
    }
});

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