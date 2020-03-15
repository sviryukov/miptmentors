import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from "@material-ui/core";
import {ContactsTextLink} from "./ContactsTextLink";
import {ContactsTextHeader} from "./ContactsTextHeader";
import {ContactsTextSocialLink} from "./ContactsTextSocialLink";

const useStyles = makeStyles(theme => ({
    contactsText: {
        order: '2',
        padding: '80px 20px 80px',
        background: 'linear-gradient(45deg, ' + theme.palette.primary.light + ', ' + theme.palette.primary.dark + ')',
        shapeOutside: 'polygon(0 0, 100% 0, 100% 433px, 66% 403px, 0 423px)',
        clipPath: 'polygon(0 0, 100% 0, 100% 433px, 66% 403px, 0 423px)',
        [theme.breakpoints.up('sm')]: {
            padding: '80px 150px 80px'
        },
        [theme.breakpoints.up('md')]: {
            order: '3',
            height: '489px',
            padding: '170px 64px 64px',
            margin: '80px 0px 50px',
            background: 'transparent',
            shapeOutside: 'none',
            clipPath: 'none'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    }
}));

const ContactsText = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={5} lg={4} xl={3}
              className={classes.contactsText}>
            <ContactsTextLink href='mailto:dm@phystechunion.org' text='dm@phystechunion.org'/>
            <br/>
            <ContactsTextLink href='tel:+79166509953' text='+7 (916) 650-99-53'/>
            <br/>
            <ContactsTextLink href='http://phystechunion.org' text='phystech&#8209;union.org'/>
            <ContactsTextHeader text='Подписывайтесь на нас:'/>
            <ContactsTextSocialLink href='https://www.facebook.com/phystech/'
                                    style={{ fontWeight: '600' }}
                                    text='facebook'/>
            <ContactsTextSocialLink href='https://vk.com/phystechunion'
                                    text='ВКонтакте'/>
            <br/>
            <ContactsTextSocialLink href='https://www.instagram.com/phystechunion/'
                                    style={{ fontFamily: 'billabong', fontSize: '40px' }}
                                    text='Instagram'/>
            <ContactsTextSocialLink href='http://t.me/phystechunion'
                                    style={{ fontWeight: '100' }}
                                    text='Telegram'/>
        </Grid>
    );
};

export {ContactsText};