import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {CssBaseline, Grid, Fade} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {NewsItemHeader} from "./NewsItemHeader";
import {NewsItemText} from './NewsItemText';
import {NewsItemDate} from './NewsItemDate';
import {Footer} from "../common/Footer";
import {NewsCardImg} from "../News/NewsCardImg";
import axios from "axios";

let useStyles = makeStyles({
    newsItemContainer: {
        justifyContent: 'center'
    }
});

const NewsItem = () => {
    const classes = useStyles();
    const [newsItem, setNewsItem] = useState(false);
    useEffect(() => {
        axios.get("/news_item_data?_id=" + window.location.href.split('/').pop())
            .then((res) => {
                setNewsItem(res.data);
            }).catch(console.log);
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar current='news'/>
            <Page>
                {newsItem && (
                    <Fade in={!!newsItem} timeout={500}>
                        <Grid container item xs={11} sm={8} lg={7} xl={6} className={classes.newsItemContainer}>
                            <NewsItemHeader text={newsItem.title}/>
                            <NewsItemDate date={newsItem.date}/>
                            <NewsCardImg alt={newsItem.title} image={newsItem.img} tag={newsItem.tag}/>
                            <NewsItemText text={newsItem.text}/>
                        </Grid>
                    </Fade>
                )}
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {NewsItem};