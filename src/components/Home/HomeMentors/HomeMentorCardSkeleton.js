import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Card, CardContent} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles({
    homeMentorCardSkeleton: {
        margin: '16px'
    },
    homeMentorCardImgSkeleton: {
        width: '100%',
        height: '0px',
        paddingBottom: '100%'
    },
    homeMentorCardHeaderSkeleton: {
        width: '50%',
        height: '20px',
        margin: '14px 0px'
    },
    homeMentorCardTextSkeleton: {
        width: '100%',
        height: '16px',
        marginBottom: '4px'
    }
});

const HomeMentorCardSkeleton = () => {
    const classes = useStyles();
    return (
        <Grid component={Card}
              item xs={10} sm={3} lg={2}
              className={classes.homeMentorCardSkeleton}>
            <Skeleton className={classes.homeMentorCardImgSkeleton} variant='rect'/>
            <CardContent>
                <Skeleton className={classes.homeMentorCardHeaderSkeleton}/>
                <Skeleton className={classes.homeMentorCardTextSkeleton}/>
                <Skeleton className={classes.homeMentorCardTextSkeleton}/>
                <Skeleton className={classes.homeMentorCardTextSkeleton}/>
            </CardContent>
        </Grid>
    );
};

export {HomeMentorCardSkeleton};