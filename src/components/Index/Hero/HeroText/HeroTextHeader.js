import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import {FadeFromTop} from "../../../common/animations";

const useStyles = makeStyles(theme => ({
    heroTextHeader: {
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
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <FadeFromTop component={Typography}
                     delay={props.animation_delay}
                     variant='h1'
                     color='secondary'
                     className={classes.heroTextHeader}>
            Программа наставничества<br/>для студентов МФТИ
        </FadeFromTop>
    );
};