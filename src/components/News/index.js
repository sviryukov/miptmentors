import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from 'axios';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/Navbar';
import PageHeader from '../common/PageHeader';
import NewsCard from './NewsCard';

let useStyles = makeStyles({
    newsContainer: {
        justifyContent: 'center'
    }
});

export default () => {
    const classes = useStyles();
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get("/news_data")
            .then(res => {
                setNews(res.data);
            });
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <PageHeader text='Новости проекта'/>
            <Grid container justify='center'>
                <Grid container spacing={4} item xs={12} sm={8} lg={9} className={classes.newsContainer}>
                    {news.map(newsItem => (
                        <NewsCard key={newsItem._id}
                                  title={newsItem.title}
                                  date={newsItem.date}
                                  img={newsItem.img}/>
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};