import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";
import FooterContactsMenuSocial from "./FooterContactsMenuSocial";

const useStyles = makeStyles(theme => ({
    footerMenuLink: {
        display: 'block',
        padding: '4px 0px',
        color: '#d9d9d9',
        transition: 'color 0.1s',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box>
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