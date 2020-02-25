import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Card, CardContent, CardMedia, Grid} from "@material-ui/core";

const useStyles = makeStyles({
    homeMentor: {
        margin: '16px'
    },
    mentorCardContent: {
        height: '115px',
        paddingTop: '0px'
    },
    homeMentorCardName: {
        fontWeight: 'bold'
    }
});

const HomeMentor = props => {
    const classes = useStyles();
    return (
        <Grid component={Card}
              item xs={10} sm={3} lg={2}
              className={classes.homeMentor}>
            <CardMedia image={'/img/' + props.img} component="img"/>
            <CardContent className={classes.homeMentorCardContent}>
                <p className={classes.homeMentorCardName}>{props.name}</p>
                {props.education}
                <br/>
                {props.work}
            </CardContent>
        </Grid>
    );
};

export {HomeMentor};