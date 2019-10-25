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

export default props => {
    const classes = useStyles();
    return (
        <Button color='secondary'
                variant='outlined'
                className={classes.heroTextButton}>
            {props.text}
        </Button>
    );
};