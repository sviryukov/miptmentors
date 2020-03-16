import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Fade, Card, CardMedia, CardContent} from "@material-ui/core";

const useStyles = makeStyles({
    mentorCard: {
        boxShadow: 'none',
        borderRadius: '0px',
        backgroundColor: 'transparent'
    },
    mentorCardImg: {
        width: '100%',
        height: '0px',
        paddingBottom: '100%'
    },
    mentorCardText: {
        height: '115px',
        paddingTop: '0px'
    },
    mentorCardHeader: {
        fontWeight: 'bold'
    }
});

const MentorCard = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Fade in={props.visible} timeout={500}>
                <Card className={classes.mentorCard}>
                    <CardMedia image={'/img/' + props.img}  className={classes.mentorCardImg}/>
                    <CardContent className={classes.mentorCardText}>
                        <p className={classes.mentorCardHeader}>
                            {props.name}
                        </p>
                        {props.education}
                        <br/>
                        {props.work}
                    </CardContent>
                </Card>
            </Fade>
        </Grid>
    );
};

export {MentorCard};