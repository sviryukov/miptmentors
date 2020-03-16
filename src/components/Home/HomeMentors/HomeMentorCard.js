import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Card, CardContent, CardMedia, Grid} from "@material-ui/core";

const useStyles = makeStyles({
    homeMentorCard: {
        margin: '16px'
    },
    homeMentorCardImg: {
        width: '100%',
        height: '0px',
        paddingBottom: '100%'
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
            <CardMedia image={'/img/' + props.img} className={classes.homeMentorCardImg}/>
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