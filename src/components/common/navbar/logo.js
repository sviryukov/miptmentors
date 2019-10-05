import React from 'react';
import {Grid, ListItem, Typography} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    listItem: {
        width: '225px',
        padding: '15px 24px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    logo: {
        fontSize: '24px'
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