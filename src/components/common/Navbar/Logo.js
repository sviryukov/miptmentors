import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, ListItem, Link, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    logoListItem: {
        backgroundColor: theme.palette.secondary.main,
        width: '195px',
        padding: '12px 19px',
        [theme.breakpoints.up('xl')]: {
            width: '207px',
            padding: '14px 22px',
        }
    },
    logo: {
        color: theme.palette.primary.main,
        fontSize: '19px',
        [theme.breakpoints.up('xl')]: {
            fontSize: '22px',
        },
        lineHeight: '1',
        fontWeight: '100',
        letterSpacing: '-0.01562em'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item>
            <ListItem className={classes.logoListItem} component={Link} href='./' underline='none'>
                <Typography variant='h2' className={classes.logo}>
                    КЛУБ<br/>МЕНТОРОВ<br/>ФИЗТЕХ-СОЮЗА
                </Typography>
            </ListItem>
        </Grid>
    );
};