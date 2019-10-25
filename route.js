import express from "express";
import React from 'react';
// noinspection ES6CheckImport
import {renderToString} from 'react-dom/server';
import {ServerStyleSheets, ThemeProvider} from "@material-ui/styles";
import template from './src/template';
import theme from './src/theme';
import Index from './src/components/Index';
import News from './src/components/News';
import Mentors from './src/components/Mentors';
import Contacts from './src/components/Contacts';
import Signin from './src/components/SignIn';

export default (passport, client) => {

    let router = express.Router();

    router.get("/", (request, response) => {
        const sheets = new ServerStyleSheets();
        const html = renderToString(
            sheets.collect(
                <ThemeProvider theme={theme}>
                    <Index/>
                </ThemeProvider>,
            ),
        );
        const css = sheets.toString();
        response.send(template('Клуб Менторов Физтех-Союза - программа наставничества МФТИ', html, "index", css));
    });

    router.get("/News", (request, response) => {
        const sheets = new ServerStyleSheets();
        const html = renderToString(
            sheets.collect(
                <ThemeProvider theme={theme}>
                    <News/>
                </ThemeProvider>,
            ),
        );
        const css = sheets.toString();
        response.send(template('Новости проекта | Клуб Менторов Физтех-Союза', html, "news", css));
    });
    router.get("/news_data", (request, response) => {
        client.db('miptmentors').collection("news").find({"publicated": true}).toArray((err, news) => {
            news.sort(function (a, b) {
                return b.date - a.date;
            });
            if (request.query.limited) news = news.slice(0, 3);
            response.send(news);
        });
    });

    router.get("/Mentors", (request, response) => {
        const sheets = new ServerStyleSheets();
        const html = renderToString(
            sheets.collect(
                <ThemeProvider theme={theme}>
                    <Mentors/>
                </ThemeProvider>,
            ),
        );
        const css = sheets.toString();
        response.send(template('Менторы проекта | Клуб Менторов Физтех-Союза', html, "mentors", css));
    });
    router.get("/mentors_data", (request, response) => {
        client.db('miptmentors').collection("mentors").find().toArray((err, mentors) => {
            response.send(mentors);
        });
    });

    router.get("/Contacts", (request, response) => {
        const sheets = new ServerStyleSheets();
        const html = renderToString(
            sheets.collect(
                <ThemeProvider theme={theme}>
                    <Contacts/>
                </ThemeProvider>,
            ),
        );
        const css = sheets.toString();
        response.send(template('Контакты | Клуб Менторов Физтех-Союза', html, "contacts", css));
    });

    router.get("/SignIn", checkIfAuthenticated, (request, response) => {
        const sheets = new ServerStyleSheets();
        const html = renderToString(
            sheets.collect(
                <ThemeProvider theme={theme}>
                    <Signin/>
                </ThemeProvider>,
            ),
        );
        const css = sheets.toString();
        response.send(template('Вход | Клуб Менторов Физтех-Союза', html, "signin", css));
    });

    return router;

};

/*const checkIfNotAuthenticated = (request, response, next) => {
    if (request.isAuthenticated()) {
        next();
    } else {
        response.redirect("/SignIn");
    }
};*/
const checkIfAuthenticated = (request, response, next) => {
    if (request.isAuthenticated()) {
        response.redirect("/admin");
    } else {
        next();
    }
};