import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    findMentorFormYear: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '45%',
            marginRight: '5%'
        }
    }
}));

const FindMentorFormYear = () => {
    const classes = useStyles();
    return (
        <TextField label='Год поступления *'
                   margin='normal'
                   type='number'
                   inputProps={{
                       min: 1951,
                       max: new Date().getFullYear()
                   }}
                   name='year'
                   id='year'
                   className={classes.findMentorFormYear}/>
    );
};

export {FindMentorFormYear};