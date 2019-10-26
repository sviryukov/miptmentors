import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ListItem, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuJoin: {
        width: '202px',
        height: '81px',
        [theme.breakpoints.up('xl')]: {
            height: '94px'
        }
    },
    menuJoinButton: {
        width: '202px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.menuJoin}>
            <Button color='secondary'
                    variant='contained'
                    href='#'
                    className={classes.menuJoinButton}>
                ПРИНЯТЬ УЧАСТИЕ
            </Button>
        </ListItem>
    );
};