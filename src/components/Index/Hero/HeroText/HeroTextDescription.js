import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextDescription: {
        position: 'relative',
        top: '-50px',
        opacity: 0,
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
    const heroTextDescription = useRef(null);
    useEffect(() => {
        heroTextDescription.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        heroTextDescription.current.style.opacity = 1;
        heroTextDescription.current.style.top = '0px';
    });
    return (
        <Typography variant='h2' className={classes.heroTextDescription} ref={heroTextDescription}>
            56 опытных специалистов и предпренимателей уже помогли более
            100 физтехам в карьерной и профессиональной деятельности
        </Typography>
    );
};