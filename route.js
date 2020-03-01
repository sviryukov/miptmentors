import express from "express";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ServerStyleSheets, ThemeProvider} from "@material-ui/styles";
import template from './src/template';
import theme from './src/theme';
import pages from './src/pages';

export default (passport, client) => {

    let router = express.Router();

    pages.map(page => {
        const PageComponent = require('./src/components/' + page.component_name)[page.component_name];
        router.get(page.url, (request, response) => {
            const sheets = new ServerStyleSheets();
            const html = ReactDOMServer.renderToString(
                sheets.collect(
                    <ThemeProvider theme={theme}>
                        <PageComponent/>
                    </ThemeProvider>
                )
            );
            const css = sheets.toString();
            response.send(template(page.title, html, page.script, css));
        });
    });

    router.get("/news_data", (request, response) => {
        client.db('miptmentors').collection("news").find({"publicated": "true"}).toArray((err, news) => {
            news.sort(function (a, b) {
                return b.date - a.date;
            });
            if (request.query.limited) news = news.slice(0, 2);
            response.send(news);
        });
    });
    router.get("/mentors_data", (request, response) => {
        let query;
        if (request.query.mentors) query = {
            name: {
                $in: request.query.mentors
            }
        };
        client.db('miptmentors').collection("mentors").find(query).toArray((err, mentors) => {
            response.send(mentors);
        });
    });

    return router;

};