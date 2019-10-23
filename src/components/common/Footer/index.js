import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import FooterMenu from './FooterMenu';
import FooterButtons from "./FooterButtons";
import FooterContacts from "./FooterContacts";
import PhystechUnionLink from "./PhystechUnionLink";

const useStyles = makeStyles({
    footer: {
        width: '100%',
        padding: '40px 0px',
        backgroundColor: '#27282c',
        justifyContent: 'center'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.footer}>
            <Grid item xs={10} md={6} lg={5}>
                <FooterMenu/>
                <FooterButtons/>
                <FooterContacts/>
            </Grid>
            <PhystechUnionLink/>
        </Grid>
    );
}