import React from 'react'
import {Grid, Typography, Button, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    description: {
        marginBottom: '40px',
        lineHeight: '1.4'
    },
    button: {
        margin: '0px 10px 10px 0px',
        fontSize: '20px'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={10} lg={7}>
            <Typography variant='h2' className={classes.description} color='secondary'>
                <b>Клуб Менторов Физтех&#8209;Союза</b>
                <br/>Мы развиваем программы наставничества в МФТИ и помогаем студентам и молодым выпускникам найти менторов для карьерного и профессионального роста
            </Typography>
            <Button color='secondary'
                    variant='outlined'
                    size='large'
                    className={classes.button}>Найти ментора</Button>
            <Button color='secondary'
                    variant='outlined'
                    size='large'
                    className={classes.button}>Стать ментором</Button>
        </Grid>
    );
};