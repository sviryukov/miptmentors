import React, {useEffect, useState} from 'react'
import {Grid, Paper, Typography, Button, Link} from "@material-ui/core";
import Countdown from './countdown';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        margin: '7% 0px',
        padding: '30px 0px',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center'
    },
    description: {
        padding: '0px 30px 20px 30px',
        fontSize: '25px',
        lineHeight: '1.4'
    },
    button: {
        margin: '10px',
        fontSize: '20px'
    },
    learnMore: {
        width: '100%',
        marginTop: '20px',
        fontSize: '25px'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Grid container justify='center'>
            <Grid item container xs={11} md={8} lg={6} className={classes.container} component={Paper}>
                <Grid item xs={12}>
                    <Typography variant='h1' className={classes.description}>
                        <b>Клуб Менторов Физтех-Союза</b> - проект, в рамках которого опытные специалисты и предприниматели становятся наставниками студентов и молодых выпускников МФТИ. В проекте реализуются программы наставничества по трем направлениям: бизнес, карьерное и научное.
                    </Typography>
                    <Button color='primary'
                            variant='contained'
                            size='large'
                            className={classes.button}>Найти ментора</Button>
                    <Button color='primary'
                            variant='contained'
                            size='large'
                            className={classes.button}>Стать ментором</Button>
                    <div className={classes.learnMore}>
                        <Link>Узнать больше</Link>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};