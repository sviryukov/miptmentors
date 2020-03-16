import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Card, CardActionArea, CardContent} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    homeNewsCardImgSkeleton: {
        width: '100%',
        height: '0px',
        paddingBottom: '66.6%'
    },
    homeNewsCardHeaderSkeleton: {
        width: '100%',
        height: '15px',
        marginBottom: '3px',
        [theme.breakpoints.up('xl')]: {
            height: '18px'
        }
    },
    homeNewsCardDateSkeleton: {
        width: '30%',
        height: '15px',
        marginTop: '19px'
    }
}));

const HomeNewsCardSkeleton = () => {
    const classes = useStyles();
    return (
        <Grid item sm={4} xs={12}>
            <Card>
                <CardActionArea>
                    <Skeleton className={classes.homeNewsCardImgSkeleton} variant='rect'/>
                    <CardContent>
                        <Skeleton className={classes.homeNewsCardHeaderSkeleton}/>
                        <Skeleton className={classes.homeNewsCardHeaderSkeleton}/>
                        <Skeleton className={classes.homeNewsCardDateSkeleton}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export {HomeNewsCardSkeleton};