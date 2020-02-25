import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homeAboutProject: {
        padding: '100px 0px',
        textAlign: 'center'
    },
    homeAboutProjectName: {
        fontWeight: '100',
        color: theme.palette.primary.main,
        fontSize: '25px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '28px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px'
        }
    },
    homeAboutProjectText: {
        fontWeight: '100',
        paddingTop: '20px',
        fontSize: '19px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '24px'
        }
    }
}));

const HomeAboutProject = () => {
    const classes = useStyles();
    return (
        <Grid item xs={11} sm={9} md={8} lg={6}
              className={classes.homeAboutProject}>
            <Typography className={classes.homeAboutProjectName}>
                Клуб Менторов Физтех&#8209;Союза
            </Typography>
            <Typography className={classes.homeAboutProjectText}>
                Проект, который помогает студентам и молодым выпускникам МФТИ найти наставника среди опытных специалистов и
                предпринимателей.
            </Typography>
            <Typography className={classes.homeAboutProjectText}>
                В проекте реализуются программы наставничества по трем направлениям: бизнес, карьерное и научное.
            </Typography>
        </Grid>
    );
};

export {HomeAboutProject};