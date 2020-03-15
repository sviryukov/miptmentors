import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Fade, Link, Card, CardActionArea, CardContent} from "@material-ui/core";
import {NewsImg} from "./NewsImg";
import {dateFormat} from './dateFormat';

const useStyles = makeStyles(theme => ({
    newsCardLink: {
        '&:hover': {
            textDecoration: 'none'
        }
    },
    newsCardText: {
        fontSize: '16px',
        [theme.breakpoints.up('xl')]: {
            fontSize: '18px'
        }
    },
    newsCardHeader: {
        margin: '0px',
        color: theme.palette.text.primary
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
        <Grid item sm={4} xs={12}>
            <Link href={'/news/' + props._id} className={classes.newsCardLink}>
                <Fade in={props.visible} timeout={500}>
                    <Card>
                        <CardActionArea>
                            <NewsImg image={props.img.replace('.', 'min.')} tag={props.tag} alt={props.title}/>
                            <CardContent className={classes.newsCardText}>
                                <p className={classes.newsCardHeader}>{props.title}</p>
                                <p className={classes.newsCardDate}>{dateFormat(props.date)}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Fade>
            </Link>
        </Grid>
    );
};

export {NewsCard};