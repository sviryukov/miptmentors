import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Fade, Card, CardActionArea, CardContent} from "@material-ui/core";
import {NewsCardImg} from "./NewsCardImg";
import {dateFormat} from './dateFormat';

const useStyles = makeStyles(theme => ({
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

const NewsCard = props => {
    const classes = useStyles();
    return (
        <Grid item lg={4} md={6} xs={12}>
            <Fade in={props.visible} timeout={500}>
                <Card>
                    <CardActionArea>
                        <NewsCardImg image={props.img.replace('.', 'min.')} tag={props.tag} alt={props.title}/>
                        <CardContent className={classes.newsCardContent}>
                            <p className={classes.newsCardTitle}>{props.title}</p>
                            <p className={classes.newsCardDate}>{dateFormat(props.date)}</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Fade>
        </Grid>
    );
};

export {NewsCard};