import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Grow, Card, CardMedia, CardContent} from "@material-ui/core";

const useStyles = makeStyles({
    mentorCard: {
        boxShadow: 'none',
        borderRadius: '0px',
        backgroundColor: 'transparent'
    },
    mentorCardContent: {
        height: '115px',
        paddingTop: '0px'
    },
    mentorCardName: {
        fontWeight: 'bold'
    }
});

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