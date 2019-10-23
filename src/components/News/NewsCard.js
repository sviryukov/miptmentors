import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Card, CardActionArea, CardMedia, CardContent} from "@material-ui/core";
import {FadeFromBottom} from "../common/animations";

const useStyles = makeStyles(theme => ({
    newsCard: {
        marginBottom: '0px',
        [theme.breakpoints.up('md')]: {
            marginBottom: '30px'
        }
    },
    newsCardContent: {
        fontSize: '16px',
        [theme.breakpoints.up('xl')]: {
            fontSize: '18px'
        }
    },
    newsCardTitle: {
        margin: '0px'
    },
    newsCardDate: {
        marginBottom: '0px',
        fontSize: '16px',
        color: theme.palette.text.secondary
    }
}));

export default (props) => {
    const classes = useStyles();
    let dateObj = new Date(props.date);
    let date = "";
    if (dateObj.getDate() < 10) date += "0";
    date += dateObj.getDate() + ".";
    if (dateObj.getMonth() < 10) date += "0";
    date += dateObj.getMonth() + ".";
    date += dateObj.getFullYear();
    return (
        <FadeFromBottom on_scroll
                        component={Grid}
                        item lg={4} md={6} xs={12}
                        className={classes.newsCard}>
            <Card>
                <CardActionArea>
                    <CardMedia image={'/img/' + props.img.replace('.', 'min.')} className={classes.media} component="img"/>
                    <CardContent className={classes.newsCardContent}>
                        <p className={classes.newsCardTitle}>{props.title}</p>
                        <p className={classes.newsCardDate}>{date}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </FadeFromBottom>
    );
}