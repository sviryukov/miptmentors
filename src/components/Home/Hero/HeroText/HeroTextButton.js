import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroTextButton: {
        margin: '0px 10px 10px 0px',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px'
        }
    }
}));

const HeroTextButton = props => {
    const classes = useStyles();
    return (
        <Button color='secondary'
                variant='contained'
                href={props.href}
                className={classes.heroTextButton}>
            {props.text}
        </Button>
    );
};

export {HeroTextButton};