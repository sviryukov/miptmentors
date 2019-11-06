import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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

const FooterMenuLink = props => {
    const classes = useStyles();
    return (
        <Box component={Link} href={props.href} target={props.target === '_blank' ? '_blank' : '_self'}
             className={classes.footerMenuLink}>
            {props.text}
        </Box>
    );
};

export {FooterMenuLink};