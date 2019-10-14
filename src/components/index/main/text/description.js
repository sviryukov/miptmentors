import React, {useEffect, useRef} from 'react'
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    description: {
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
    const description = useRef(null);
    useEffect(() => {
        description.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        description.current.style.opacity = 1;
        description.current.style.top = '0px';
    });
    return (
        <Typography variant='h2' className={classes.description} ref={description}>
            56 опытных специалистов и предпренимателей уже помогли более
            100 физтехам в карьерной и профессиональной деятельности
        </Typography>
    );
};