import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Card, CardContent, CardMedia, Grid} from "@material-ui/core";

const useStyles = makeStyles({
    homeMentorCard: {
        margin: '16px'
    },
    homeMentorCardHeader: {
        fontWeight: 'bold'
    }
});

const HomeMentorCard = props => {
    const classes = useStyles();
    return (
        <Grid component={Card}
              item xs={10} sm={3} lg={2}
              className={classes.homeMentorCard}>
            <CardMedia image={'/img/' + props.img} component="img"/>
            <CardContent>
                <p className={classes.homeMentorCardHeader}>
                    {props.name}
                </p>
                {props.education}
                <br/>
                {props.work}
            </CardContent>
        </Grid>
    );
};

export {HomeMentorCard};