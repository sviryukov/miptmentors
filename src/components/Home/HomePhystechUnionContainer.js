import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Link, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homePhystechUnionContainer: {
        padding: '75px 0px',
        borderTop: '1px solid ' + theme.palette.divider,
        justifyContent: 'center'
    },
    homePhystechUnion: {
        textAlign: 'center'
    },
    homePhystechUnionImg: {
        width: '280px',
        marginBottom: '40px'
    },
    homePhystechUnionText: {
        fontWeight: '100',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '19px'
        }
    },
    homePhystechUnionTextLink: {
        color: '#204d9c',
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

const HomePhystechUnionContainer = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} container className={classes.homePhystechUnionContainer}>
            <Grid item xs={10} md={8} lg={5}
                  className={classes.homePhystechUnion}>
                <Link href='https://phystech-union.org/' target='_blank'>
                    <img src={'/img/phystech-union.png'} alt={'Физтех-Союз'}
                         className={classes.homePhystechUnionImg}/>
                </Link>
                <Typography className={classes.homePhystechUnionText}>
                    <Link href='https://phystech-union.org/' target='_blank'
                          className={classes.homePhystechUnionTextLink}>
                        Физтех-Союз
                    </Link> – главный организатор проекта, некоммерческое партнерство, созданное инициативной группой
                    выпускников с целью модернизации МФТИ. Физтех-Союз принимает непосредственное участие в реализации
                    проектов, направленных на развитие института, оказывая консультативную, организационную и финансовую
                    поддержку.
                </Typography>
            </Grid>
        </Grid>
    );
};

export {HomePhystechUnionContainer};