import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import {Grid} from "@material-ui/core";
import {NewsCard} from "../common/NewsCard";
import {HomeBlockLink} from "./HomeBlockLink";

const useStyles = makeStyles(theme => ({
    homeNewsContainer: {
        padding: '75px 0px',
        justifyContent: 'center',
        borderBottom: '1px solid ' + theme.palette.divider,
        [theme.breakpoints.up('md')]: {
            padding: '100px 0px'
        }
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
            <Grid container spacing={2} item xs={11} lg={8} className={classes.homeNews}>
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