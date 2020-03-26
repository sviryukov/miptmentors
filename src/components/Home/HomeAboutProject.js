import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";
import {HomeBlockLink} from "./HomeBlockLink";

const useStyles = makeStyles(theme => ({
    homeAboutProjectContainer: {
        padding: '75px 0px',
        borderBottom: '1px solid ' + theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        fontWeight: '100',
        fontSize: '19px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '100px 0px',
            fontSize: '24px'
        }
    },
    homeAboutProject: {
        marginBottom: '20px'
    },
    homeAboutProjectImg: {
        width: '250px',
        marginBottom: '20px'
    },
    homeAboutProjectHeader: {
        marginBottom: '20px',
        color: theme.palette.secondary.main,
        fontSize: '30px',
        [theme.breakpoints.up("md")]: {
            fontSize: '40px'
        }
    }
}));

const HomeAboutProject = () => {
    const classes = useStyles();
    return (
        <Grid container justify='center'
              item xs={12}
              className={classes.homeAboutProjectContainer} id={'learn-more-target'}>
            <Grid item xs={11} sm={9} md={8} lg={6} className={classes.homeAboutProject} >
                <img className={classes.homeAboutProjectImg} src={'/img/logo.svg'} alt={'Клуб Менторов Физтех-Союза'}/>
                <Typography variant='h2' className={classes.homeAboutProjectHeader}>
                    Клуб Менторов Физтех&#8209;Союза
                </Typography>
                Проект, который помогает студентам и молодым выпускникам МФТИ найти наставника среди опытных специалистов и
                предпринимателей.
                <br/>
                <br/>
                В проекте реализуются программы наставничества по трем направлениям: бизнес, карьерное и научное.
            </Grid>
            <HomeBlockLink href={'/about'} text={'Подробнее о проекте'}/>
        </Grid>
    );
};

export {HomeAboutProject};