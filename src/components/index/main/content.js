import React from 'react'
import {Grid, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    description: {
        marginBottom: '40px',
        lineHeight: '1.4',
        fontWeight: 'normal',
        fontSize: '32px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '44px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '55px'
        }
    },
    button: {
        margin: '0px 10px 10px 0px',
        fontSize: '20px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={10} lg={7}>
            <Typography variant='h2' className={classes.description} color='secondary'>
                Программа наставничества<br/>для студентов МФТИ
            </Typography>
            <Button color='secondary'
                    variant='outlined'
                    className={classes.button}>Найти ментора</Button>
            <Button color='secondary'
                    variant='outlined'
                    className={classes.button}>Стать ментором</Button>
        </Grid>
    );
};