import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from 'axios';
import {CssBaseline, Grid} from "@material-ui/core";
import {Navbar} from '../common/Navbar';
import {Page} from "../common/Page";
import {PageHeader} from "../common/PageHeader";
import {PageNavbar} from "../common/PageNavbar";
import {NewsCard} from '../common/NewsCard';
import {Footer} from "../common/Footer";

let useStyles = makeStyles({
    newsContainer: {
        justifyContent: 'center'
    }
});

const News = () => {
    const classes = useStyles();
    const [news, setNews] = useState([]);
    const [tag, setTag] = useState('all');
    const [newsVisible, setNewsVisible] = useState(false);
    const newsTags = [
        {
            name: 'all',
            heading: 'все новости'
        },
        {
            name: 'meeting',
            heading: 'встречи'
        },
        {
            name: 'event',
            heading: 'мероприятия'
        },
        {
            name: 'feedback',
            heading: 'отзывы'
        }
    ];
    useEffect(() => {
        axios.get("/news_data")
            .then(res => {
                setNews(res.data);
                setNewsVisible(true);
            });
    }, []);
    const handleSetTag = newTag => {
        if (newTag !== tag) {
            setNewsVisible(false);
            setTimeout(() => {
                setTag(newTag);
                setNewsVisible(true);
            }, 300);
        }
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar current='news'/>
            <Page>
                <PageHeader text={'Новости проекта'}/>
                <Grid container spacing={2} item xs={11} lg={8} className={classes.newsContainer}>
                    <PageNavbar tabs={newsTags} setTab={handleSetTag} initialTab={'all'}/>
                    {news.map((newsItem) => (
                        (tag === newsItem.tag || tag === 'all') &&
                        <NewsCard key={newsItem._id}
                                  _id={newsItem._id}
                                  title={newsItem.title}
                                  date={newsItem.date}
                                  img={newsItem.img}
                                  tag={newsItem.tag}
                                  visible={newsVisible}/>
                    ))}
                </Grid>
            </Page>
            <Footer/>
        </React.Fragment>
    );
};

export {News};