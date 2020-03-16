import React from "react";
import {FooterMenuHeader} from "./FooterMenuHeader";
import {FooterMenuLink} from "./FooterMenuLink";
import {Grid} from "@material-ui/core";

const FooterMenu = props => {
    return (
        <Grid item xs={12} sm={6} md={3} lg={2}>
            <FooterMenuHeader text={props.header}/>
            {props.links.map(link => (
                <FooterMenuLink {...link} key={link.href}/>
            ))}
        </Grid>
    );
};

export {FooterMenu};