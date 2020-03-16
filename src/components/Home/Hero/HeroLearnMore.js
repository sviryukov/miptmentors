import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography, Link} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    heroTextLearnMoreContainer: {
        marginTop: '20px'
    },
    heroTextLearnMore: {
        padding: '6px 0px',
        cursor: 'pointer',
        color: theme.palette.text.light,
        transition: 'color 0.2s',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            padding: '6px 16px',
            fontSize: '20px'
        },
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.light
        }
    }
}));

const HeroLearnMore = () => {
    const classes = useStyles();
    const handleClick = () => {
        window.scrollTo({
            top: document.getElementById('learn-more-target').getBoundingClientRect().top + pageYOffset,
            behavior: 'smooth'
        })
    };
    return (
        <Typography className={classes.heroTextLearnMoreContainer}>
            <Link className={classes.heroTextLearnMore} onClick={handleClick}>
                Узнать больше ➙
            </Link>
        </Typography>
    );
};

export {HeroLearnMore};