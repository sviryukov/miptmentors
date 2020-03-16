import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {FooterMenu} from "./FooterMenu";
import {FooterContactsMenu} from "./FooterContactsMenu";

const useStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        padding: '50px 50px 20px',
        justifyContent: 'center',
        backgroundColor: theme.palette.text.primary,
        fontSize: '15px'
    },
    footerCopyright: {
        paddingTop: '65px',
        color: theme.palette.secondary.contrastText,
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center'
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container item className={classes.footer}>
                <FooterMenu header='Клуб Менторов Физтех&#8209;Союза'
                            links={[
                                {href: '/mentors', text: 'Менторы проекта'},
                                {href: '/news', text: 'Новости проекта'},
                                {href: '/contacts', text: 'Контакты'},
                                {href: 'http://phystech-union.org', target: '_blank', text: 'Физтех-Союз'}
                            ]}/>
                <FooterMenu header='Принять участие'
                            links={[
                                {href: '/becomementor', text: 'Стать ментором'},
                                {href: '/findmentor', text: 'Найти ментора'}
                            ]}/>
                <FooterMenu header='Правовая информация'
                            links={[
                                {
                                    href: 'https://phystech-union.org/wp-content/uploads/2019/08/Confidential_p-u.pdf',
                                    target: '_blank',
                                    text: 'Политика конфиденциальности'}
                            ]}/>
                <FooterContactsMenu/>
                <Grid item xs={12}
                      className={classes.footerCopyright}>
                    © 2019 Физтех-Союз
                </Grid>
            </Grid>
        </Grid>
    );
};

export {Footer};