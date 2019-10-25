import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    MenuJoin: {
        width: 'auto',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.MenuJoin}>
            <Button color='secondary' variant='contained' href='#'>
                ПРИНЯТЬ УЧАСТИЕ
            </Button>
        </ListItem>
    );
};