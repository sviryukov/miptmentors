import React from 'react';
import {Grid, ListItem, Link, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    listItem: {
        width: '225px',
        padding: '15px 24px',
        backgroundColor: theme.palette.secondary.main
    },
    logo: {
        fontSize: '24px',
        lineHeight: '1',
        fontWeight: '100',
        letterSpacing: '-0.01562em'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item className={classes.container}>
            <ListItem className={classes.listItem} component={Link} href='./' underline='none'>
                <Typography variant='h1' className={classes.logo}>
                    КЛУБ<br/>МЕНТОРОВ<br/>ФИЗТЕХ-СОЮЗА
                </Typography>
            </ListItem>
        </Grid>
    );
};