import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

let useStyles = makeStyles({
    formHeader: {
        marginBottom: '20px',
        fontWeight: '100'
    }
});

const FormHeader = props => {
    const classes = useStyles();
    return (
        <Typography variant='h4'
                    className={classes.formHeader}>
            {props.text}
        </Typography>
    );
};

export {FormHeader};