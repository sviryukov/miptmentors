import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";

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
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '250px'
        }
    }
}));

const FooterMenuHeader = props => {
    const classes = useStyles();
    return (
        <Box className={classes.footerMenuHeader}>
            {props.text}
        </Box>
    );
};

export {FooterMenuHeader};