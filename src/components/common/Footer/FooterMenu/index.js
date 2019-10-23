import React from "react";
import {makeStyles} from "@material-ui/styles";
import {List, Box} from "@material-ui/core";
import FooterMenuItem from "./FooterMenuItem";
import FooterMenuDivider from "./FooterMenuDivider";

const useStyles = makeStyles({
    footerMenuList: {
        flexDirection: 'row',
        marginBottom: '20px',
        padding: '0px',
        alignItems: 'center'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <List component={Box} className={classes.footerMenuList} display={{xs: 'block', md: 'flex'}}>
            <FooterMenuItem text='Новости проекта' href='/news'/>
            <FooterMenuDivider/>
            <FooterMenuItem text='Менторы проекта' href='/mentors'/>
            <FooterMenuDivider/>
            <FooterMenuItem text='Контакты' href='/contacts'/>
            <FooterMenuDivider/>
            <FooterMenuItem text='Войти' href='/signin'/>
        </List>
    );
}