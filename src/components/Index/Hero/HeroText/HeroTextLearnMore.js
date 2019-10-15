import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import {FadeFromTop} from "../../../common/animations";

const useStyles = makeStyles(theme => ({
    heroTextLearnMore: {
        width: 'fit-content',
        margin: '10px auto',
        cursor: 'pointer',
        color: 'cyan',
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

export default props => {
    const classes = useStyles();
    return (
        <FadeFromTop component={Typography}
                     delay={props.animation_delay}
                     transitions='color 0.4s'
                     className={classes.heroTextLearnMore}>
            Узнать больше ➙
        </FadeFromTop>
    );
};