import React from "react";
import {Card, CardMedia, CardContent, Grid, Grow} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    card: {
        boxShadow: 'none',
        borderRadius: '0px'
    },
    content: {
        height: '115px',
        paddingTop: '0px'
    },
    name: {
        fontWeight: 'bold'
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Grow in={props.visible}>
                <Card className={classes.card}>
                    <CardMedia image={'/img/' + props.img} component="img"/>
                    <CardContent className={classes.content}>
                        <p className={classes.name}>{props.name}</p>
                        {props.education}
                        <br/>
                        {props.work}
                    </CardContent>
                </Card>
            </Grow>
        </Grid>
    );
}