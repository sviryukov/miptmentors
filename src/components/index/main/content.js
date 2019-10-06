import React from 'react'
import {Grid, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        margin: '40px 0px',
        padding: '0px 20px',
        [theme.breakpoints.up('sm')]: {
            margin: '130px 0px',
            padding: '0px'
        },
        [theme.breakpoints.up('xl')]: {
            margin: '200px 0px'
        }
    },
    description: {
        marginBottom: '40px',
        lineHeight: '1.4'
    },
    button: {
        margin: '0px 10px 10px 0px',
        fontSize: '20px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid container justify='center'>
            <Grid item container xs={12} md={10} lg={9} className={classes.container}>
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
            </Grid>
        </Grid>
    );
};