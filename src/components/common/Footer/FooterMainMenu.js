import React from "react";
import {FooterMainMenuHeader} from "./FooterMainMenuHeader";
import {FooterMenuLink} from "./FooterMenuLink";

const FooterMainMenu = () => {
    return (
        <React.Fragment>
            <FooterMainMenuHeader/>
            <FooterMenuLink href='/news' text='Новости проекта'/>
            <FooterMenuLink href='/mentors' text='Менторы проекта'/>
            <FooterMenuLink href='/contacts' text='Контакты'/>
            <FooterMenuLink href='http://phystech-union.org' target='_blank' text='Физтех-Союз'/>
        </React.Fragment>
    );
};

export {FooterMainMenu};