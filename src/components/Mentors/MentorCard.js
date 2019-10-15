import React from "react";
import {Card, CardMedia, CardContent, Grid, Grow} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    mentorCard: {
        boxShadow: 'none',
        borderRadius: '0px'
    },
    mentorCardContent: {
        height: '115px',
        paddingTop: '0px'
    },
    mentorCardName: {
        fontWeight: 'bold'
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Grow in={props.visible} timeout={500}>
                <Card className={classes.mentorCard}>
                    <CardMedia image={'/img/' + props.img} component="img"/>
                    <CardContent className={classes.mentorCardContent}>
                        <p className={classes.mentorCardName}>{props.name}</p>
                        {props.education}
                        <br/>
                        {props.work}
                    </CardContent>
                </Card>
            </Grow>
        </Grid>
    );
}