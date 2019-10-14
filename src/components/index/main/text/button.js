import React from 'react'
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    button: {
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
                className={classes.button}>{props.text}</Button>
    );
};