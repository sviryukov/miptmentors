import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import {FadeFromTop} from "../../../common/animations";

const useStyles = makeStyles(theme => ({
    heroTextDescription: {
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
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <FadeFromTop component={Typography}
                     delay={props.animation_delay}
                     variant='h2'
                     className={classes.heroTextDescription}>
            56 опытных специалистов и предпренимателей уже помогли более
            100 физтехам в карьерной и профессиональной деятельности
        </FadeFromTop>
    );
};