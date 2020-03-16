import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerMenuLink: {
        display: 'inline-block',
        marginBottom: '15px',
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
        <>
            <Link href={props.href} target={props.target || '_self'}
                 className={classes.footerMenuLink}>
                {props.text}
            </Link>
            <br/>
        </>
    );
};

export {FooterMenuLink};