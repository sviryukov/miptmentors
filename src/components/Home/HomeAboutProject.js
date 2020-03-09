import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homeAboutProjectContainer: {
        padding: '75px 0px',
        borderBottom: '1px solid ' + theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '100px 0px'
        }
    },
    homeAboutProjectImg: {
        width: '250px',
        marginBottom: '20px'
    },
    homeAboutProjectName: {
        fontWeight: '100',
        color: theme.palette.secondary.main,
        fontSize: '30px',
        [theme.breakpoints.up("md")]: {
            fontSize: '40px'
        }
    },
    homeAboutProjectText: {
        fontWeight: '100',
        paddingTop: '20px',
        fontSize: '19px',
        [theme.breakpoints.up('200pxsm')]: {
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
        <Grid container item xs={12} className={classes.homeAboutProjectContainer} id={'learn-more-target'}>
            <Grid item xs={11} sm={9} md={8} lg={6}>
                <img className={classes.homeAboutProjectImg} src={'/img/logo.png'} alt={'Клуб Менторов Физтех-Союза'}/>
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
        </Grid>
    );
};

export {HomeAboutProject};