import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles({
    homeAllMentorsLinkContainer: {
        textAlign: 'center',
        fontSize: '22px'
    },
    homeAllMentorsLink: {
        color: '#1976d2'
    }
});

const HomeAllMentorsLink = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.homeAllMentorsLinkContainer}>
            <Link href={'/mentors'} className={classes.homeAllMentorsLink}>
                Все менторы
            </Link>
        </Grid>
    );
};

export {HomeAllMentorsLink};