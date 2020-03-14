import express from "express";
import {MongoClient} from "mongodb";
import {route} from "./route/route";
import {uri} from './config/db';

const app = express();

const port = 8080;

// noinspection JSIgnoredPromiseFromCall
MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {

    if (err) return console.log(err);

    let router = route(client);

    app.use(router);

    app.use(express.static("assets"));

    app.listen(port, () => {
        console.log("We are live on " + port);
    });

});