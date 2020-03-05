import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import {Grid} from "@material-ui/core";
import {NewsCard} from "../../common/NewsCard";
import {HomeBlockLink} from "../HomeBlockLink";
import {HomeBlockHeader} from "../HomeBlockHeader";

const useStyles = makeStyles(theme => ({
    homeNewsContainer: {
        padding: '100px 0px 50px',
        borderBottom: '1px solid ' + theme.palette.divider,
        justifyContent: 'center'
    },
    homeNews: {
        justifyContent: 'center'
    }
}));

const HomeNews = () => {
    const classes = useStyles();
    const [news, setNews] = useState([]);
    const [newsVisible, setNewsVisible] = useState(false);
    useEffect(() => {
        axios.get("/news_data?limited=3")
            .then(res => {
                setNews(res.data);
                setNewsVisible(true);
            });
    }, []);
    return (
        <Grid container item xs={12} className={classes.homeNewsContainer}>
            <HomeBlockHeader text={'Новости проекта'}/>
            <Grid container spacing={2} item xs={11} sm={8} className={classes.homeNews}>
                {news.map((newsItem) => (
                    <NewsCard key={newsItem._id}
                              _id={newsItem._id}
                              title={newsItem.title}
                              date={newsItem.date}
                              img={newsItem.img}
                              tag={newsItem.tag}
                              visible={newsVisible}/>
                ))}
                <HomeBlockLink href={'/news'} text={'Больше новостей'}/>
            </Grid>
        </Grid>
    );
};

export {HomeNews};