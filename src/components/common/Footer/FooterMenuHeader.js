import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    footerMenuHeader: {
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
        <div className={classes.footerMenuHeader}>
            {props.text}
        </div>
    );
};

export {FooterMenuHeader};