import express from "express";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ServerStyleSheets, ThemeProvider} from "@material-ui/styles";
import template from '../src/template';
import theme from '../src/theme';
import pages from '../src/pages';
import {ObjectID} from 'mongodb';
import {NewsItem} from '../src/components/NewsItem';
import bodyParser from 'body-parser';
import {createValidator} from "./createValidator";
import {becomeMentorFormData} from "../src/components/BecomeMentor/becomeMentorFormData";
import {reminderFormData} from "../src/components/FindMentor/reminderFormData";
import {contactUsFormData} from "../src/components/Contacts/contactUsFormData";
import nodeMailer from 'nodemailer';
import emailAuth from '../config/email-auth';

const route = client => {

    let router = express.Router();

    pages.map(page => {
        const PageComponent = require('../src/components/' + page.component_name)[page.component_name];
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

    router.get("/news/:id", (request, response) => {
        try {
            let _id = ObjectID(request.params.id);
            client.db('miptmentors').collection("news").findOne({"_id": _id}).then(newsItem => {
                if (newsItem.publicated === 'false') {
                    response.redirect("/news");
                } else {
                    const sheets = new ServerStyleSheets();
                    const html = ReactDOMServer.renderToString(
                        sheets.collect(
                            <ThemeProvider theme={theme}>
                                <NewsItem/>
                            </ThemeProvider>
                        )
                    );
                    const css = sheets.toString();
                    response.send(template(newsItem.title + ' | Клуб Менторов Физтех-Союза', html, 'newsitem', css));
                }
            });
        } catch (err) {
            response.redirect("/news");
        }
    });

    router.get("/news_data", (request, response) => {
        client.db('miptmentors').collection("news").find({"publicated": "true"}).toArray((err, news) => {
            news.sort(function (a, b) {
                return b.date - a.date;
            });
            if (request.query.limited) news = news.slice(0, request.query.limited);
            response.send(news);
        });
    });
    router.get("/news_item_data", (request, response) => {
        try {
            let _id = ObjectID(request.query._id);
            client.db('miptmentors').collection("news").findOne({_id: _id}).then(newsItem => {
                if (newsItem.publicated === "true") {
                    response.send(newsItem);
                } else {
                    response.sendStatus('400');
                }
            });
        } catch (e) {
            response.sendStatus('400');
        }
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

    const jsonParser = bodyParser.json();

    const becomeMentorValidator = createValidator(becomeMentorFormData);
    router.post('/becomementor', jsonParser, (request, response) => {
        if (becomeMentorValidator(request.body)) {
            delete request.body.processingConsent;
            client.db('miptmentors').collection("mentor-apps").insertOne(request.body)
                .then(() => response.sendStatus(200))
                .catch(insertError => {
                    console.log(insertError);
                    response.sendStatus(400);
                });
        } else response.sendStatus(400);
    });

    const reminderValidator = createValidator(reminderFormData);
    router.post('/reminder', jsonParser, (request, response) => {
        if (reminderValidator(request.body)) {
            client.db('miptmentors').collection("emails-to-remind").insertOne(request.body)
                .then(() => response.sendStatus(200))
                .catch(insertError => {
                    console.log(insertError);
                    response.sendStatus(400);
                });
        } else response.sendStatus(400);
    });

    const contactUsValidator = createValidator(contactUsFormData);
    let transporter = nodeMailer.createTransport(emailAuth);
    let mailToOptions = {
        from: emailAuth.auth.user,
        to: 'dm@phystechunion.org',
        subject: "Вопрос пользователя с сайта Клуба Менторов Физтех-Союза"
    };
    router.post('/contactus', jsonParser, (request, response) => {
        if (contactUsValidator(request.body)) {
            mailToOptions.text = 'E-mail пользователя: ' + request.body.email + '\n\n'
                + 'Вопрос пользователя: ' + request.body.question;
            transporter.sendMail(mailToOptions, sendError => {
                if (sendError) {
                    console.log(sendError);
                    response.sendStatus(400);
                } else response.sendStatus(200);
            });
        } else response.sendStatus(400);
    });

    return router;

};

export {route};