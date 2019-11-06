import React from "react";
import {FooterMenuHeader} from "./FooterMenuHeader";
import {FooterMenuLink} from "./FooterMenuLink";

const FooterLegalMenu = () => {
    return (
        <React.Fragment>
            <FooterMenuHeader text='Правовая информация'/>
            <FooterMenuLink href='https://phystech-union.org/wp-content/uploads/2019/08/Confidential_p-u.pdf'
                            target='_blank'
                            text='Политика конфиденциальности'/>
        </React.Fragment>
    );
};

export {FooterLegalMenu};