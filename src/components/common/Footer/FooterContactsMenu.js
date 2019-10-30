import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";
import FooterContactsMenuSocial from "./FooterContactsMenuSocial";

const useStyles = makeStyles(theme => ({
    footerMenuLink: {
        display: 'block',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.footerMenuLink}>
                <FooterContactsMenuSocial/>
            </Box>
            <Box component={Link} href='tel:+79250479358'
                 className={classes.footerMenuLink}>
                +7 (925) 047-93-58
            </Box>
            <Box component={Link} href='mailto:sviryukov.k@phystech.edu'
                 className={classes.footerMenuLink}>
                sviryukov.k@phystech.edu
            </Box>
        </React.Fragment>
    );
}