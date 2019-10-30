import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerMenuHeader: {
        display: 'block',
        height: '104px',
        padding: '30px 0px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    },
    footerMenuLink: {
        display: 'block',
        paddingBottom: '15px',
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
            <Box component={Link} href='#'
                 className={classes.footerMenuHeader}>
                Принять участие
            </Box>
            <Box component={Link} href='#'
                 className={classes.footerMenuLink}>
                Найти ментора
            </Box>
            <Box component={Link} href='#'
                 className={classes.footerMenuLink}>
                Стать ментором
            </Box>
        </React.Fragment>
    );
}