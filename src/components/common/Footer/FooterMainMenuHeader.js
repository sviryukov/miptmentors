import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerMainMenuHeader: {
        display: 'block',
        height: '104px',
        padding: '30px 0px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '208px'
        }
    }
}));

const FooterMainMenuHeader = () => {
    const classes = useStyles();
    return (
        <Box display={{xs: 'block', sm: 'none'}}
             component={Link} href={'/'}
             className={classes.footerMainMenuHeader}>
            Клуб Менторов Физтех&#8209;Союза
        </Box>
    );
};

export {FooterMainMenuHeader};