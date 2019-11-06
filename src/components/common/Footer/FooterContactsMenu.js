import React from "react";
import {FooterContactsMenuSocial} from "./FooterContactsMenuSocial";
import {FooterMenuLink} from "./FooterMenuLink";

const FooterContactsMenu = () => {
    return (
        <React.Fragment>
            <FooterContactsMenuSocial/>
            <FooterMenuLink href='tel:+79250479358' text='+7 (925) 047-93-58'/>
            <FooterMenuLink href='mailto:sviryukov.k@phystech.edu' text='sviryukov.k@phystech.edu'/>
        </React.Fragment>
    );
};

export {FooterContactsMenu};