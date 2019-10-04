import React from "react";
import {Card, CardActionArea, CardMedia, CardHeader, Grid, CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: '20px'
    },
    date: {
        fontSize: '16px',
        color: theme.palette.text.secondary
    }
}));

export default (props) => {
    const classes = useStyles();
    let dateObj = new Date(props.date);
    let date = "";
    if(dateObj.getDate() < 10) date += "0";
    date += dateObj.getDate() + ".";
    if(dateObj.getMonth() < 10) date += "0";
    date += dateObj.getMonth() + ".";
    date += dateObj.getFullYear();
    return (
        <Grid item lg={4} md={6} xs={12}>
            <Card>
                <CardActionArea>
                    <CardContent className={classes.content}>
                        {props.title}
                        <p className={classes.date}>{date}</p>
                    </CardContent>
                    <CardMedia image={'/img/' + props.img} className={classes.media} component="img"/>
                </CardActionArea>
            </Card>
        </Grid>
    );
}