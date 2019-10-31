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
        transition: 'color 0.1s',
        color: '#d9d9d9',
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
            <Box className={classes.footerMenuHeader}>
                Правовая информация
            </Box>
            <Box component={Link} href='#'
                 className={classes.footerMenuLink}>
                Согласие на обработку<br/>персональных данных
            </Box>
        </React.Fragment>
    );
}