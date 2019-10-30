import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Link, Typography} from "@material-ui/core";
import ContactsTextFacebook from "./ContactsTextFacebook";
import ContactsTextVk from "./ContactsTextVk";
import ContactsTextInstagram from "./ContactsTextInstagram";
import ContactsTextTelegram from "./ContactsTextTelegram";

const useStyles = makeStyles(theme => ({
    contactsText: {
        order: '2',
        padding: '80px 30px 80px',
        background: 'linear-gradient(45deg, ' + theme.palette.secondary.light + ', ' + theme.palette.secondary.dark + ')',
        [theme.breakpoints.up('sm')]: {
            padding: '80px 150px 80px'
        },
        [theme.breakpoints.up('md')]: {
            order: '3',
            height: '489px',
            padding: '202px 64px 64px',
            margin: '80px 0px 50px',
            background: 'transparent'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    },
    contactsTextLink: {
        fontSize: '20px',
        fontWeight: '100',
        '&:hover': {
            textDecoration: 'none'
        },
        color: theme.palette.secondary.contrastText
    },
    contactsTextFollowUs: {
        padding: '30px 0px',
        fontSize: '20px',
        fontWeight: '100',
        color: theme.palette.secondary.contrastText
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={5} lg={4} xl={3}
              className={classes.contactsText}>
            <Link href='#' className={classes.contactsTextLink}>
                sviryukov.k@phystech.edu
            </Link>
            <br/>
            <Link href='#' className={classes.contactsTextLink}>
                +7 (925) 047-93-58
            </Link>
            <Typography className={classes.contactsTextFollowUs}>
                Подписывайтесь на нас:
            </Typography>
            <ContactsTextFacebook/>
            <ContactsTextVk/>
            <br/>
            <ContactsTextInstagram/>
            <ContactsTextTelegram/>
        </Grid>
    );
};