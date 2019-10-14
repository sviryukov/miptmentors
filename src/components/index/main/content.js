import React from 'react'
import {Grid, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    grid: {
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left'
        }
    },
    header: {
        marginBottom: '15px',
        lineHeight: '1.4',
        fontWeight: 'normal',
        fontSize: '25px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '44px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '55px'
        }
    },
    description: {
        marginBottom: '25px',
        lineHeight: '1.4',
        fontWeight: 'normal',
        color: theme.palette.text.light,
        fontSize: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '26px'
        }
    },
    button: {
        margin: '0px 10px 10px 0px',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px'
        }
    },
    link: {
        width: 'fit-content',
        margin: '10px auto',
        cursor: 'pointer',
        color: 'cyan',
        transition: 'color 0.4s',
        fontSize: '17px',
        [theme.breakpoints.up('sm')]: {
            margin: '10px 0px',
            fontSize: '20px'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px'
        },
        '&:hover': {
            color: 'magenta'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={10} lg={7} className={classes.grid}>
            <Typography variant='h1' className={classes.header} color='secondary'>
                Программа наставничества<br/>для студентов МФТИ
            </Typography>
            <Typography variant='h2' className={classes.description}>
                56 опытных специалистов и предпренимателей уже помогли более
                100 физтехам в карьерной и профессиональной деятельности
            </Typography>
            <Button color='secondary'
                    variant='outlined'
                    className={classes.button}>Найти ментора</Button>
            <Button color='secondary'
                    variant='outlined'
                    className={classes.button}>Стать ментором</Button>
            <br/>
            <Typography className={classes.link}>
                Узнать больше ➙
            </Typography>
        </Grid>
    );
};