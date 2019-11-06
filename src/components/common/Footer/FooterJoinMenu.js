import React from "react";
import {FooterMenuHeader} from "./FooterMenuHeader";
import {FooterMenuLink} from "./FooterMenuLink";

const FooterJoinMenu = () => {
    return (
        <React.Fragment>
            <FooterMenuHeader text='Принять участие'/>
            <FooterMenuLink href='/findmentor' text='Найти ментора'/>
            <FooterMenuLink href='/becomementor' text='Стать ментором'/>
        </React.Fragment>
    );
};

export {FooterJoinMenu};