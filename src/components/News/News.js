import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from 'axios';
import {CssBaseline, Grid} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {reveal} from "../common/animations";
import {NewsCard} from './NewsCard';
import {Footer} from "../common/Footer";

let useStyles = makeStyles({
    newsContainer: {
        justifyContent: 'center'
    }
});

const News = () => {
    const classes = useStyles();
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get("/news_data")
            .then(res => {
                setNews(res.data);
                reveal();
            });
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar current='news'/>
            <Page>
                <Grid container spacing={2} item xs={12} sm={8} lg={9} className={classes.newsContainer}>
                    {news.map(newsItem => (
                        <NewsCard key={newsItem._id}
                                  title={newsItem.title}
                                  date={newsItem.date}
                                  img={newsItem.img}/>
                    ))}
                </Grid>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {News};