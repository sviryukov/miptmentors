import express from "express";
import session from "express-session";
import passport from "passport";
import Strategy from "passport-local";
import {MongoClient} from "mongodb";
import {ObjectId} from "mongodb";
import flash from "connect-flash";
import route from "./route";
import {uri} from './config/db';

const app = express();

const port = 8080;

// noinspection JSIgnoredPromiseFromCall
MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {

    if (err) return console.log(err);

    app.use(session({secret: "5d56a66d1c9d440000d48e9b"}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
        client.db("miptmentors").collection("admins").findOne(ObjectId(id), (err, user) => {
            done(err, user);
        });
    });
    passport.use("signin", new Strategy({
        passReqToCallback: true
    }, (request, username, password, done) => {
        client.db("miptmentors").collection("admins").findOne({username: username}, (err, user) => {
            if (user) {
                if (user.password === password) {
                    return done(null, user);
                } else {
                    return done(null, false, request.flash("error", "Неверный логин или пароль"));
                }
            } else {
                return done(null, false, request.flash("error", "Неверный логин или пароль"));
            }
        });
    }));

    let router = route(passport, client);
    app.use(router);

    app.use(express.static("assets"));

    app.listen(port, () => {
        console.log("We are live on " + port);
    });

});