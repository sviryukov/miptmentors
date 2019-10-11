import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from '../common/navbar';
import Card from './card';
import Header from '../common/header';

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
            <Grid container justify='center'>
                <Header text='Новости проекта'/>
                <Grid item container xs={10} sm={8} lg={9} spacing={4} className={classes.newsContainer}>
                    {news.map(newsItem => (
                        <Card key={newsItem._id}
                              title={newsItem.title}
                              date={newsItem.date}
                              img={newsItem.img}/>
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};