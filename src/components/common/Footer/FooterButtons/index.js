import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";
import FooterMenuButton from "../FooterButtons/FooterButton";

const useStyles = makeStyles({
    footerButtons: {
        flexDirection: 'row',
        padding: '0px',
        alignItems: 'center'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Box className={classes.footerButtons} display={{xs: 'block', md: 'flex'}}>
            <FooterMenuButton text='Найти ментора' href='#'/>
            <FooterMenuButton text='Стать ментором' href='#'/>
        </Box>
    );
}