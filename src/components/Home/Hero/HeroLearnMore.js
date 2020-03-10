import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    heroTextLearnMore: {
        margin: '10px 50px 10px 0px',
        padding: '6px 0px',
        verticalAlign: 'middle',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: theme.palette.text.light,
        lineHeight: '1.75',
        transition: 'color 0.2s',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            margin: '0px 10px 10px 0px',
            padding: '6px 16px',
            fontSize: '20px'
        },
        '&:hover': {
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
        <button className={classes.heroTextLearnMore} onClick={handleClick}>
            Узнать больше ➙
        </button>
    );
};

export {HeroLearnMore};