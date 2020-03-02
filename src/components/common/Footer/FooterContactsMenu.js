import React from "react";
import {FooterContactsMenuSocial} from "./FooterContactsMenuSocial";
import {FooterMenuLink} from "./FooterMenuLink";

const FooterContactsMenu = () => {
    return (
        <React.Fragment>
            <FooterContactsMenuSocial/>
            <FooterMenuLink href='tel:+79166509953' text='+7 (916) 650-99-53'/>
            <FooterMenuLink href='mailto:dm@phystechunion.org' text='dm@phystechunion.org'/>
        </React.Fragment>
    );
};

export {FooterContactsMenu};