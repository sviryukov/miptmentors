import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homeAboutProject: {
        width: '300px',
        paddingBottom: '100px',
        textAlign: 'center',
        fontWeight: '100',
        fontSize: '19px',
        [theme.breakpoints.up('sm')]: {
            width: '460px',
            fontSize: '22px'
        },
        [theme.breakpoints.up('md')]: {
            width: '800px'
        },
        [theme.breakpoints.up('md')]: {
            width: '900px',
            fontSize: '24px'
        }
    }
}));

const HomeAboutProject = () => {
    const classes = useStyles();
    return (
        <Grid item
              className={classes.homeAboutProject}>
            <b>Клуб Менторов Физтех-Союза</b> - проект, который помогает студентам и молодым выпускникам МФТИ найти
            наставника среди опытных специалистов и предпринимателей. В проекте реализуются программы наставничества по
            трем направлениям: бизнес, карьерное и научное.
        </Grid>
    );
};

export {HomeAboutProject};