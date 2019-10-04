import React from "react";
import {Card, CardMedia, CardContent, Grid} from "@material-ui/core";
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
        <Grid item xl={3} lg={4} md={6} xs={12}>
            <Card className={classes.card}>
                <CardMedia image={'/img/' + props.img} component="img"/>
                <CardContent className={classes.content}>
                    <p className={classes.name}>{props.name}</p>
                    {props.education}
                    <br/>
                    {props.work}
                </CardContent>
            </Card>
        </Grid>
    );
}